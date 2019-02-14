<template>
  <div class="container">
    <p class="logo">meta.us</p>
    <h1 class="title">Bring Players Together</h1>
    <p class="content">
      Sign to gain access to creating a Compertition Listing on meta.us. Customize A/B/C, Lorem ipsum dolar sit
      amet consectebur. EU pretium justo rhoncus us desription of Competition feature.
    </p>
    <loginComponent />
  </div>
</template>


<script>
import loginComponent from '../components/login.vue'
export default {
  name: 'loginContainer',
  components: {
    loginComponent
  }
};
</script>

<style scoped>
.container {
  width: 80%;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  background-image: url("../assets/background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
}

.logo {
  font-size: 30px;
  font-weight: 600;
  margin: 0;
  padding-top: 30px;
}

.title {
  margin: 0;
  font-size: 25px;
  font-weight: 700;
}

.content {
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
  
}

</style>