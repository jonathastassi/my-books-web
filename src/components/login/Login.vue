<template>
  <div>
	  <h5>Login</h5>
    <form @submit.prevent>
      <label>E-mail</label>
      <input type="email" name="email" id="email" v-model="loginForm.email" v-on:keyup.enter="$event.target.nextElementSibling.focus()" autofocus placeholder="Digite o seu e-mail...">
      <label>Senha</label>
      <input type="password" name="password" id="password" v-model="loginForm.password" v-on:keyup.enter="$event.target.nextElementSibling.focus()"  placeholder="Digite a sua senha...">
      <button class="btn waves-effect waves-light green lighten-4 btn-flat" @click="login">Entrar</button>
      <!-- <router-link to="/signup">Criar uma conta</router-link> -->
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      loginForm: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    login() {
      this.$store.commit('setLoginForm', this.loginForm)
      this.$store.dispatch('login')
      .catch(() => {
        Swal({
          type: 'error',
          title: 'Não foi possível fazer login',
          timer: 2000
        })
      })
    }
  }
}
</script>

<style scoped>

</style>

