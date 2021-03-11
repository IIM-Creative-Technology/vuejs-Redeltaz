<template>
<div class="admin">
  <div class="createDiv">
    <h1 class="title">Gestion Administrateur du Blog</h1>
    <button class="create" v-on:click="displayCreate">{{buttonContent}}</button><br>
    <div class="addPost" :style="{ display: display }">
        <input type="text" placeholder="Titre de la page" v-model="title" class="input"/><br>
        <input type="text" placeholder="Meta Titre" v-model="metaTitle" class="input"/><br>
        <input type="text" placeholder="Meta Description" v-model="metaDescription" class="input"/><br>
        <textarea placeholder="Corps du post" v-model="content" class="input"></textarea><br>
        <input type="text" placeholder="Image (mettre une url)" v-model="image" class="input"><br>
        <button class="add" @click="addPost()">Créer</button>
    </div>
  </div>
  <div class="allPosts" v-for="post in allPoste" :key="post.title">
    <SinglePost :post="post" />
  </div>
</div>
</template>

<script>
import SinglePost from './SinglePoste'

export default {
  name: 'Gestion',
  components: {
    SinglePost
  },
  data() {
    return {
      buttonContent: "Créer une page",
      display: 'none',
      isCreateDisplay: false,

      allPoste: this.$store.state.listBlog,
      title: '',
      metaTitle: '',
      metaDescription: '',
      content: '',
      image: ''
    }
  },

  methods: {
    displayCreate(){
      if(this.isCreateDisplay){
        this.display = 'none'
        this.buttonContent = "Créer une page"
      }else{
        this.display = 'block'
        this.buttonContent = "Réduire"
      }
      this.isCreateDisplay = !this.isCreateDisplay
    },

    addPost(){
      let newPoste = {
        title: this.title,
        metaTitle: this.metaTitle,
        metaDescription: this.metaDescription,
        content: this.content,
        image: this.image
      }

      this.$store.commit('INCREMENT_BLOG', newPoste)//envois du poste au storage

      alert('Votre page a bien été ajouté !')
      this.display = 'none'
      this.buttonContent = "Créer une page"

      this.title = ''
      this.metaTitle = ''
      this.metaDescription = ''
      this.content = ''
      this.image = ''
    }
  }
}
</script>

<style>
  .admin{
    padding-bottom: 50px;
  }

  .admin .title{
    text-align: center;
    margin: 20px 0;
  }

  .admin .addPost{
    text-align: center;
    border: 2px solid white;
    border-radius: 25px;
    width: 70vw;
    padding: 10px 0;
    margin: 0 auto 20px auto;
  }

  .admin .createDiv{
    text-align: center;
  }

  .admin .create{
    margin-bottom: 20px;
  }

  .admin .createDiv input, .createDiv textarea{
    margin-bottom: 20px;
    width: 500px;
  }

  .admin .createDiv textarea{
    height: 100px;
  }

  .admin .createDiv input{
    height: 30px;
  }

  .addPost{
    display: none;
  }
</style>
