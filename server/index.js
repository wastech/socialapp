const express = require("express");
const app = express();
var morgan = require("morgan");
const mongoose = require("mongoose");
var cors = require("cors");
var bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const hpp = require("hpp");
const { MONGOURI } = require("./config/keys");
dotenv.config({ path: ".env" });

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
mongoose.connection.on("connected", () => {
  console.log("conneted to mongo yeahh");
});
mongoose.connection.on("error", (err) => {
  console.log("err connecting", err);
});
// Sanitize data
app.use(mongoSanitize());
//app.use(helmet.contentSecurityPolicy());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy({ setTo: "version 1 is awesome" }));
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());

// Prevent XSS attacks
app.use(xss());
var corsOptions = {
  origin: "http://localhost:8080",
};



// Prevent http param pollution
app.use(hpp());

require("./models/user");
require("./models/post");

app.use(cors(corsOptions));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

 if (process.env.NODE_ENV === "development") {
app.use(morgan("dev"));
}

app.use(require("./routes/auth"));
app.use(require("./routes/post"));
app.use(require("./routes/user"));

// handle & forward request errors
if (process.env.NODE_ENV === "development") {
  app.use((res, req, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });
  // get error
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message,
      },
    });
  });
}

// Production
if (process.env.NODE_ENV === "production") {
  // Static folder
  app.use(express.static(__dirname + "/public/"));

  // handle & forward reqest errors
  app.use((error, req, res, next) => {
    res.status(error.statusCode || 500).json({
      status: error.status,
      message: error.message,
    });
  });
  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

app.listen(process.env.PORT, () => {
  console.log(
    `We are live on ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  );
});
