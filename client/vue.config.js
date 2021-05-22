const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "../server/public"),
  devServer: {
    proxy: {
      "/": {
        target: process.env.VUE_APP_ROOT_URL,
        secure: false,
      },
    },
  },
  chainWebpack: (config) => {
    config.plugins.delete("split-manifest").delete("inline-manifest");
  },
  productionSourceMap: false,
};
