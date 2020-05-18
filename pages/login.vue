<template>
  <div>
    <div class="container container-form">
      <form @submit="handleSubmit">
        <h2 class="heading-1 form-heading">LOGIN</h2>
        <input v-model="identifier" autocomplete="on" type="email" placeholder="email" />
        <input v-model="password" type="password" placeholder="password" />
        <button type="submit">Submit</button>
        <i class="fa fa-user"></i>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  auth: "guest",
  data() {
    return {
      identifier: "",
      password: ""
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      const { identifier, password } = this;

      this.$auth
        .loginWith("local", {
          data: {
            identifier,
            password
          }
        })
        .then(() =>
          this.$toast.success("Logged in successfully !", {
            icon: "done"
          })
        )
        .catch(err => {
          this.$toast.error(err, {
            icon: "error"
          });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

form {
  margin: 0 auto;
  padding: 100px;
  max-width: 670px;
  background: $lightBackground;
  box-shadow: 0px 0px 20px 2px rgba(90, 90, 90, 0.281);
  input {
    display: block;
    width: 100%;
    font-size: 18px;
    box-sizing: border-box;
    font-family: $robotoMedium;
    padding: 30px 25px;
    border: none;
    transition: box-shadow 0.3s ease-in-out;
    margin-bottom: 20px;
    &::placeholder {
      font-family: $robotoMedium;
      color: rgba(90, 90, 90, 0.336);
      font-size: 18px;
    }
    &:focus {
      box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.082);
      border-radius: 3px;
      outline: none;
    }
  }
}

button {
  width: 100%;
  padding: 25px;
  color: white;
  margin-bottom: 20px;
}

.form-heading {
  color: rgb(90, 90, 90);
  margin-bottom: 35px;
}
@media only screen and (max-width: 768px) {
  .container-form {
    min-height: 80vh;
  }
  form {
    padding: 50px 15px;
  }
}
</style>
