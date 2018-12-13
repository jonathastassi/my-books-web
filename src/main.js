// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
import Firebase from './services/Firebase'

import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';



Vue.config.productionTip = false


/* eslint-disable no-new */

let app
Firebase.auth().onAuthStateChanged(user =>{

  if (user) {
    router.push('/')
  }
  else {
    router.push('/login')
  }

  if (!app) {

    if (user) {
      store.commit('setUser', user)
    }

    app = new Vue({
            el: '#app',
            router,
            store,
            template: '<App/>',
            components: { App }
          })
  }
})
