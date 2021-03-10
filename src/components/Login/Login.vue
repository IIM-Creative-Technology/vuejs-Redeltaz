<template>
  <p>login</p>
  <div class="addUser">
      <label>Email: </label>
      <input type="text" v-model="email" class="input"/>
      <label>Mot de Passe: </label>
      <input type="text" v-model="password" class="input"/>
      <button class="add" @click="connect()">Se connecter</button>
      <p>Pas encore de compte ?</p><router-link to="/register">S'inscrire</router-link>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data(){
    return{
      email: '',
      password: ''
    }
  },
  methods: {
    connect(){
      let user = {
        email: this.email,
        password: this.password
      }
      this.$store.commit('TRY_CONNECT', user)

      this.email = ''
      this.password = ''
    }
  }
}
</script>

<style>

</style>
