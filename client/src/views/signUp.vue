<template>
  <div class="container">
    <div class="row rw ">
      <div class=" col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <div class="about">
          <h2>wastech</h2>
          <p>connect with your friends and worlds around you on wastech</p>
        </div>
      </div>
      <div class=" col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 login-box">
        <form>
          <div class="mb-3 input-group-lg">
            <input
              type="text"
              class="form-control"
              placeholder="username"
              v-model="name"
            />
          </div>

          <div class="mb-3 input-group-lg">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="email"
              v-model="email"
            />
          </div>
          <div class="mb-3 input-group-lg">
            <input
              type="password"
              class="form-control "
              id="exampleInputPassword1"
              placeholder="password"
              v-model="password"
            />
          </div>
          <div class="mb-3 input-group-lg">
            <input
              type="text"
              class="form-control "
              id="exampleInputPassword1"
              placeholder="full name"
              v-model="fullName"
            />
          </div>
          <div class="mb-3">
            <textarea
              class="form-control"
              placeholder="bio"
              id="exampleFormControlTextarea1"
              rows="3"
              v-model="bio"
            ></textarea>
          </div>

          <div class="row g-3">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="city"
                aria-label="city..."
                v-model="city"
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="nationality"
                aria-label="Nationality .."
                v-model="nationality"
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="status (single/married)"
                aria-label="Last name"
                v-model="status"
              />
            </div>
          </div>

          <div class="d-grid gap-2 ">
            <button
              class="btn btn-primary"
              type="button"
              v-on:click.prevent="validateInputs"
            >
              Sign Up
            </button>
          </div>

          <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-success" type="button">
              Log in
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
      name: "",
      email: "",

      password: "",
      nationality: "",
      bio: "",
      city: "",
      status: "",
      fullName: "",
    };
  },
  methods: {
    validateInputs() {
      this.signUp();
    },
    async signUp() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          name: this.name,
          // lastname: this.lastname,
          password: this.password,
          nationality: this.nationality,
          bio: this.bio,
          city: this.city,
          status: this.status,
          fullName: this.fullName,
        });

        this.$toast.success(response.data.message, {
          position: "top",
        });
        this.$router.push({
          name: "login",
        });
      } catch (error) {
        this.$toast.error(error.response.data.error, {
          position: "top",
        });
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
.rw {
  margin-top: 2em;
}
.d-grid {
  margin-top: 1em;
}
</style>
