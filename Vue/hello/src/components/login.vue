<template>
  <form class="form-login">
    <h2>LOGIN WITH FACEBOOK</h2>
    <div class="wrap">
      <span class="stroke"></span>
      <p>or</p>
      <span class="stroke"></span>
    </div>

    <div>
      <p class="element">
        <span>EMAIL ADDRESS</span>
        <i class="fa fa-user" aria-hidden="true"></i>
      </p>
      <input placeholder="@your-mail" type="text" :value="email" name="email" @change="change">
    </div>

    <div>
      <p class="element">
        <span>PASSWORD</span>
        <i class="fa fa-user" aria-hidden="true"></i>
      </p>

      <input placeholder="Password" type="password" name="password">
    </div>

    <button @click="navigate" type="button" class="btn">
      <span>LOGIN</span>
    </button>
    <div class="create-account">
      <p>Account</p>
      <spain class="slash">/</spain>
      <p>Password</p>
    </div>
  </form>
</template>


<script>
export default {
  name: "loginComponent",
  data() {
    return {
      email: "string@gmail.com"
    };
  },

  methods: {
    navigate() {
      this.$router.push({ name: "HelloWorld" });
    },
    change(e) {
      this.email = e.target.value;
    }
  }
};
</script>

<style scoped>
.form-login {
  width: 300px;
  background-color: #fff;
  color: #000;
  margin-left: auto;
  margin-right: auto;
}

h2 {
  background-color: #3b5998;
  font-size: 12px;
  text-align: center;
  font-weight: 600;
  line-height: 50px;
  border: none;
  color: #fff;
  letter-spacing: 2px;
  margin: 0;
}

.stroke {
  display: inline-block;
  width: 100px;
  height: 1px;
  background-color: #b2b2b2;
  margin: 0;
  margin-top: 25px;
}

.wrap {
  display: flex;
  line-height: 50px;
  text-align: center;
  justify-content: space-evenly;
}

.wrap p {
  margin: 0;
}

.element {
  max-width: 260px;
  margin-left: auto;
  margin-right: auto;
  color: #7f7f7f;
  display: flex;
  justify-content: space-between;
}

.element span {
  font-size: 11px;
}

input {
  width: 90%;
  height: 30px;
  margin-bottom: 40px;
  padding-left: 5px;
  border: none;
}

.btn {
  width: 100%;
  border: none;
  background-color: #479b93;
  height: 50px;
  line-height: 50px;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 3px;
}

.create-account {
  background-color: #000;
  height: 50px;
  line-height: 50px;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  justify-content: space-evenly;
}

.create-account p {
  margin: 0;
  letter-spacing: 1px;
}

.create-account .slash {
  font-size: 20px;
}
</style>
