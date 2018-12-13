<template>
  <div id="app">

      <!-- <div class="container center-align container-login">
        <div className="row ">
          <div className="col s12">
            <img class="logo-login" src="#" alt="Louvor IPB Tanabi" />
            <h4>Louvor IPB Tanabi</h4>
          </div>
        </div>
        <div className="row">
          <div className="col s6 offset-s3">
            <form>
              <input
                type="email"
                placeholder="Digite o e-mail"
              />
              <input
                type="password"
                placeholder="Digite a Senha"
              />
              <button
                type="submit"
                class="btn btn-large waves-effect waves-light "
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div> -->

    <header>
      <span>Login</span>
    </header>
    <main>
      <!-- <img src="./assets/logo.png" alt="Vue.js PWA"> -->
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

.logo-login {
  width: 200px;
}

.container-login {
  padding: 50px;
  margin-top: 60px !important;
  background-color: #fff;
  border-radius: 2px;
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
