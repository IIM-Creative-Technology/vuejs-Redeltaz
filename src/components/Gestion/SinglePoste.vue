<template>
  <div class="singlePost">
    <div class="minSize">
        <h1>{{ postTitle }}</h1>
        <p>{{ postContent }}</p>
        <button v-on:click="changeSize()">{{buttonContent}}</button>
        <button v-on:click="deletePost(post)">supprimer</button>
    </div>
    <div class="maxSize" :style="{ display: display }">
        <label>Meta Title : </label>
        <input type="text" v-model="postMetaTitle" placeholder="Meta Titre" class="input"/><br>
        <label>Meta Description : </label>
        <input type="text" v-model="postMetaDescription" placeholder="Meta Description" class="input"/><br>
        <div>
          <label>Corps du post : </label>
          <textarea v-model="postContent" class="input" placeholder="Corps du post"></textarea>
        </div><br>
        <label>Image : </label>
        <input type="text" v-model="postImage" placeholder="Image (mettre une url)" class="input" /><br>
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
            buttonContent: "éditer",
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
        if(this.isMaxSize){
            this.display = 'none'
            this.buttonContent = "éditer"
        }else{
            this.display = 'block'
            this.buttonContent = "réduire"
        }
        this.isMaxSize = !this.isMaxSize
    },

    updatePost(id){
        let updatedPost = {
            id: id,
            title: this.$store.state.listBlog[id].title, //garde l'ancien titre pour empecher la modif
            metaTitle: this.postMetaTitle,
            metaDescription: this.postMetaDescription,
            content: this.postContent,
            image: this.postImage
        }
        this.$store.commit('UPDATE_BLOG', {id, updatedPost})//Envois des données modifiées du post avec son id en param pour trouver lequel modifier
        alert('Vos changements ont été pris en compte !')

        this.display = 'none'
        this.buttonContent = "éditer"
    },

    deletePost(post){
        this.$store.commit('DELETE_POST', post)
    }
  }
}
</script>

<style>

    .singlePost{
      border: 2px solid white;
      border-radius: 25px;
      margin: 20px 0;
    }

    .minSize{
        text-align: center;
        padding: 20px 100px;
    }

    .minSize h1{
      margin: 20px 0;
      text-decoration: underline;
    }

    .minSize p{
      margin: 20px 0;
    }

    .minSize button{
      margin: 0 10px;
    }

    .maxSize{
      text-align: center;
    }

    .maxSize input{
      width: 400px;
      height: 30px;
    }

    .maxSize textarea{
      width: 400px;
      height: 100px;
    }

    .maxSize input{
      margin-bottom: 20px;
    }
    
    .maxSize .update{
      margin-bottom: 20px;
    }
</style>
