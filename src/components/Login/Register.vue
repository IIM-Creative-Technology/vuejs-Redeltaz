<template>
    <label>Email: </label>
    <input type="text" v-model="email" class="input"/>
    <label>Mot de Passe: </label>
    <input type="text" v-model="password" class="input"/>
    <button class="add" @click="register()">S'inscrire</button>
    <router-link to="/login">Se connecter</router-link>
    <router-view/>
</template>

<script>

export default {
  name: 'Register',
  data() {
    return {
        email: '',
        password: ''
    }
  },
  methods: {
    register(){
        let newUser = {
            email: this.email,
            password: this.password
        }
        this.$store.commit('TRY_REGISTER', newUser)
        
        this.email = ''
        this.password = ''
    }
  }
}
</script>

<style>

</style>
