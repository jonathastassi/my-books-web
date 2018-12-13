<template>
  <div>
	  <h1>Login</h1>
    <form @submit.prevent>
      <label>E-mail</label>
      <input type="email" name="email" id="email" v-model="loginForm.email" placeholder="Digite o seu e-mail...">
      <label>Senha</label>
      <input type="password" name="password" id="password" v-model="loginForm.password" placeholder="Digite a sua senha...">
      <button @click="login">Entrar</button>
      <router-link to="/signup">Criar uma conta</router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        email: 'jonathastassi@hotmail.com',
        password: '123456',
      }
    }
  },
  methods: {
    login() {
      this.$store.commit('setLoginForm', this.loginForm)
      this.$store.dispatch('login')
    }
  }
}
</script>

<style scoped>

</style>

