<template>
  <div class="singlePost">
  <div class="minSize">
      <h1>{{ postTitle }}</h1>
      <p>{{ postContent }}</p>
      <p>{{ postID }}</p>
      <button v-on:click="changeSize()">éditer</button>
      <button v-on:click="deletePost(post)">supprimer</button>
    </div>
    <div class="maxSize" :style="{ display: display }">
      <label>Titre de la page : </label>
      <input type="text" v-model="postTitle" class="input"/>
      <label>Meta Title : </label>
      <input type="text" v-model="postMetaTitle" class="input"/>
      <label>Meta Description : </label>
      <input type="text" v-model="postMetaDescription" class="input"/>
      <label>Corps du post : </label>
      <input type="text" v-model="postContent" class="input"/>
      <label>Image : </label>
      <input type="text" v-model="postImage" class="input" />
      <button class="update" @click="updatePost(post.id)">Valider les modifications</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SinglePost',
  props: ['post'],
  data(){
      return{
            display: 'none',
            isMaxSize: false,

            postTitle: this.post.title,
            postMetaTitle: this.post.metaTitle,
            postMetaDescription: this.post.metaDescription,
            postContent: this.post.content,
            postImage: this.post.image,
            postID: this.post.id
      }
  },
  methods: {
    changeSize(){
        console.log(this.post)
        if(this.isMaxSize){
            this.display = 'none'
        }else{
            this.display = 'block'
        }
        this.isMaxSize = !this.isMaxSize
    },

    updatePost(id){
        let updatedPost = {
            id: id,
            title: this.postTitle,
            metaTitle: this.postMetaTitle,
            metaDescription: this.postMetaDescription,
            content: this.postContent,
            image: this.postImage
        }
        this.$store.commit('UPDATE_BLOG', {id, updatedPost})
    },

    deletePost(post){
        this.$store.commit('DELETE_POST', post)
    }
  }
}
</script>

<style>
    .minSize{
        cursor: pointer;
    }
</style>
