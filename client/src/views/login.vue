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
              v-model="email"
              aria-describedby="emailHelp"
              placeholder="email"
            />
          </div>
          <div class="mb-3 input-group-lg">
            <input
              type="password"
              class="form-control "
              v-model="password"
              id="exampleInputPassword1"
              placeholder="password"
            />
          </div>

          <div class="d-grid gap-2 ">
            <button
              class="btn btn-primary"
              type="button"
              v-on:click.prevent="validateInputs"
            >
              log in
            </button>
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
<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    validateInputs() {
      this.login();
    },
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);

        this.$router.push({
          name: "Home",
        });
        // this.$router.replace(this.$route.query.from);
        this.$toast.success(response.data.message, {
          position: "top",
        });
      } catch (error) {
        this.$toast.error(error.response.data.error, {
          position: "top",
        });
        console.log("error", error.response.data.error);
      }
    },
  },
};
</script>
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
  font-size: 5em;
  font-weight: 900;
  color: blue;
}
p {
  font-size: x-large;
  font-weight: 900;
}
.row {
  margin-top: 5em;
}
</style>
