<template>
  <form class="form-login">
    <h2>LOGIN WITH FACEBOOK</h2>
    <div class="wrap">
      <span class="stroke"></span>
      <p>or</p>
      <span class="stroke"></span>
    </div>
    
    <div>
      <p>EMAIL ADDRESS</p>
      <i class="fa fa-user" aria-hidden="true"></i>
      <input placeholder="Email" type="text" name="email">
    </div>
    <div>
      <p>PASSWORD</p>
      <i class="fa fa-user" aria-hidden="true"></i>
      <input placeholder="Password" type="password" name="password">
    </div>
    <div>LOGIN</div>
    <div>
      Create Account<spain>/</spain>Forgot Password
    </div>
  </form>
</template>


<script>
export default {
  name: 'loginComponent'
};
</script>

<style scoped>

.form-login {
  width: 300px;
  height: 400px;
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
}

.wrap p {
  margin: 0;
}

</style>