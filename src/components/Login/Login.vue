<template>
<div class="loginDiv">
  <h1>Se connecter</h1>
  <form class="addUser">
      <label>Email: </label>
      <input type="text" v-model="email" class="input" required/><br>
      <label>Mot de Passe: </label>
      <input type="password" v-model="password" class="input" required/><br>
      <button class="add" @click="connect()">Se connecter</button>
      <div><p>Pas encore de compte ?</p><router-link to="/register">S'inscrire</router-link></div>
      <p @click="disconnect()" class="disconnect" v-if="isConnected !== null">Se déconnecter</p>
    <router-view/>
  </form>
</div>
</template>

<script>

export default {
  name: 'Login',
  data(){
    return{
      email: '',
      password: '',
      isConnected: localStorage.getItem('connectedUser')//On vérifie si quelqu'un est connecté pour faire apparaitre ou non le bouton de deconnexion
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
      this.$router.push('Blog')//redirection au blog après connexion
    },

    disconnect(){
      this.$store.commit('TRY_LOGOUT')
      this.$router.push('Blog')//redirection au blog après connexion
    }
  }
}
</script>

<style>
.loginDiv{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 150px 0;
}

.loginDiv h1{
  margin-bottom: 20px;
}

.addUser{
  border: 3px solid white;
  border-radius: 25px;
  padding: 60px;
  text-align: center;
}

.addUser input{
  margin-bottom: 20px;
}

.addUser div{
  display: flex;
  margin: 15px 0;
}

.addUser div a{
  color: black;
  margin-left: 10px;
}

.disconnect{
  cursor: pointer;
  text-decoration: underline;
}
</style>
