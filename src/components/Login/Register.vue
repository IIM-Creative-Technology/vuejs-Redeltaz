<template>
<div class="registerDiv">
<h1>Créer un nouveau compte</h1>
  <form class="registerUser">
      <label>Email: </label>
      <input type="text" v-model="email" class="input"/><br>
      <label>Mot de Passe: </label>
      <input type="password" v-model="password" class="input"/><br>
      <button class="register" @click="register()">S'inscrire</button><br>
      <router-link to="/login">Se connecter</router-link>
      <router-view/>
  </form>
</div>
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
        this.$router.push('Login')//Une fois l'utilisateur enregistré on le renvois vers la page login
    }
  }
}
</script>

<style>
.registerDiv{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 150px 0;
}

.registerDiv h1{
  margin-bottom: 20px;
}

.registerUser{
  border: 3px solid white;
  border-radius: 25px;
  padding: 60px;
  text-align: center;
}

.registerUser input{
  margin-bottom: 20px;
}

.registerUser div{
  display: flex;
  margin: 15px 0;
}

.registerUser div a{
  color: black;
  margin-left: 10px;
}

.register{
  margin-bottom: 15px;
}

.registerUser a{
  color: black;
}

</style>
