<template>
  <div class="container">
    <div class="row ">
      <div class=" col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <div class="about">
          <h2>wastech</h2>
          <p>connect with friends and wolrd around you on wastech</p>
        </div>
      </div>
      <div class=" col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 login-box">
        <form>
          <div class="mb-3 input-group-lg">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="email"
            />
          </div>
          <div class="mb-3 input-group-lg">
            <input
              type="password"
              class="form-control "
              id="exampleInputPassword1"
              placeholder="password"
            />
          </div>

          <div class="d-grid gap-2 ">
            <button class="btn btn-primary" type="button">log in</button>
          </div>
          <section>
            <div class="text">
              <h6>forgot password</h6>
            </div>
          </section>

          <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-success" type="button">
              Create a New Account
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
.text {
  text-align: center;
}
h6 {
  color: blue;
  font-weight: 700;
  font-size: large;
  margin-top: 1em;
  margin-bottom: 1em;
}
.btn {
  padding: 1em;
}
.login-box {
  -webkit-box-shadow: 0px 10px 16px -8px rgba(0, 0, 0, 0.68);

  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
}
form {
  padding: 3em;
}
.about {
  text-align: center;
}
h2 {
  font-size:5em;
  font-weight: 900;
  color: blue;
}
p{
  font-size: x-large;
  font-weight: 900;
  
}
.row{
  margin-top: 5em;
}
</style>
