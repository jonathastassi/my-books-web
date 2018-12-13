<template>
  <div id="app">

    <div class="navbar-fixed">
      <nav class="green darken-4 ">
        <div class="nav-wrapper container">
          <router-link to="/books" class="brand-logo">My Books</router-link>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down">
            <li>
              <li><router-link to="/books">Livros</router-link></li>
              <!-- <li><a href="sass.html">Assuntos</a></li> -->
              <li>
                <a @click="logout">
                    <i class="material-icons left">exit_to_app</i>Sair
                </a>
              </li>
          </ul>
        </div>
      </nav>
    </div>
    <ul class="sidenav" id="mobile-demo">
      <li><router-link class="sidenav-close" to="/books">Livros</router-link></li>
      <!-- <li><a href="badges.html">Assuntos</a></li> -->
      <li><a @click="logout" class="sidenav-close" >Sair</a></li>
    </ul>



    <!-- <header> -->
      <!-- <span>Telas</span> -->
      <!-- <button @click="logout">Sair</button> -->
    <!-- </header> -->
    <!-- <main> -->
      <!-- <img src="./assets/logo.png" alt="Vue.js PWA"> -->
      <router-view></router-view>
    <!-- </main> -->

    <div v-show="$store.getters.getShowModalLoading" class="spinner">
      <div class="preloader-wrapper small active">
        <div class="spinner-layer spinner-green-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div><div class="gap-patch">
            <div class="circle"></div>
          </div><div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  },
  mounted() {
    var elems = document.querySelectorAll(".sidenav");
    window.M.Sidenav.init(elems);
  }
}
</script>

<style>

@media only screen and (max-width: 992px) {
  nav > .container {
    width: 100%;
  }

  .container {
    width: 94%;
  }
}

.spinner {
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100%;
    z-index: 9999;
    line-height: 100vh;
    opacity: 1;
    background: #ffffff73;
}
</style>
