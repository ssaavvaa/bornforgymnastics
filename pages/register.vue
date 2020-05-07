<template>
  <div>
    <div class="container container-form">
      <form @submit="handleSubmit">
        <h2 class="heading-1 form-heading">REGISTER</h2>
        <p class="creation-text">
          Создайте учетную запись для доступа в личный кабинет со всеми
          тренировками, историей заказов и дополнительным возможностям
        </p>
        <input v-model="username" type="text" placeholder="username" />
        <input v-model="email" type="email" placeholder="email" />
        <input v-model="password" type="password" placeholder="password" />
        <p class="rights">Мы не передаем никакие ваши данные третьим лицам</p>
        <button type="submit">{{ loading ? "Loading..." : "Submit" }}</button>
        <nuxt-link to="/login" class="have-account">Have an account</nuxt-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  auth: "guest",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      loading: false
    };
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      this.loading = true;

      const { username, email, password } = this;
      try {
        const { user, jwt } = await this.$axios.$post("/auth/local/register", {
          username,
          email,
          password
        });
        this.loading = false;
        this.$auth.setUser(user);
        this.$auth.setUserToken(jwt);
        this.$toast.success("Registered successfully!").goAway(1500);
      } catch (err) {
        this.loading = false;
        this.$toast.error(err).goAway(1500);
      }
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
.creation-text {
  max-width: 490px;
  text-align: center;
  margin: 0 auto;
  font-size: 16px;
  font-family: $myriadMedium;
  margin-bottom: 20px;
}

.rights {
  font-family: $robotoLight;
  color: rgba(90, 90, 90, 0.336);
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
}

.have-account {
  font-family: $mainFontReg;
  color: rgb(90, 90, 90);
  font-size: 20px;
  display: block;
  text-align: center;
  margin: 0 auto;
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
