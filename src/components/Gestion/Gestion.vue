<template>
  <p>gestion</p>
  <button v-on:click="displayCreate">Créer une page</button>
  <div class="addPost">
      <input type="text" placeholder="Titre de la page" v-model="title" class="input"/>
      <input type="text" placeholder="Meta Title" v-model="metaTitle" class="input"/>
      <input type="text" placeholder="Meta Description" v-model="metaDescription" class="input"/>
      <input type="text" placeholder="Corps du post" v-model="content" class="input"/>
      <input type="text" placeholder="Image" v-model="image" class="input"/>
      <button class="add" @click="addPost()">Créer</button>
  </div>
  <div class="allPosts" v-for="post in allPoste" :key="post.title">
    <SinglePost :post="post" />
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
        document.querySelector('.addPost').style.display = "none"
      }else{
        document.querySelector('.addPost').style.display = "block"
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

      this.$store.commit('INCREMENT_BLOG', newPoste)

      this.title = ''
      this.metaTitle = ''
      this.metaDescription = ''
      this.content = ''
      this.image = ''
    },

    updatePost(){

    }
  }
}
</script>

<style>
  .addPost{
    display: none;
  }
</style>
