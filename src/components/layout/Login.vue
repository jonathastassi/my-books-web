<template>
  <div id="app">

    <div class="container center-align container-login">
      <div className="row ">
        <div className="col s6 offset-s3">
          <img class="logo-login" src="/static/icon.png" alt="Louvor IPB Tanabi" />
          <h4>My Books</h4>
        </div>
      </div>
      <div className="row">
        <div className="col s6 offset-s3">
          <router-view></router-view>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

.logo-login {
  width: 100px;
}

.container-login {
  padding: 25px;
  margin-top: 18px;
  background-color: #fff;
  border-radius: 2px;
  /* width: 50%; */
}

@media only screen and (min-width: 993px) {
  .container-login {
    width: 35%;
    margin-top: 60px;
    padding: 50px;
  }
}

body {
  background-color: #eee;
}

form .btn {
  width: 100%;
}

.margin-top-30 {
  margin-top: 30px;
}
</style>
