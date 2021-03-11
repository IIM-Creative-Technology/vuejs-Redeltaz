<template>
<div class="blog">
  <h1 class="title">Bienvenue sur le Blog !</h1>
  <div class="allPosts" v-for="post in allPoste" :key="post.title">
    <router-link :to="{ name: 'SinglePoste', params: {id: post.id} }">
      <div class="singlePost">
      <div class="singleLeft">
        <img :src="post.image" alt="image" v-if="post.image">
        <img src="@/assets/imgRef.jpg" alt="image" v-else>
      </div>
      <div class="singleRight">
        <h1>{{ post.title }}</h1>
        <p>{{ post.metaDescription }}</p>
      </div>
      </div>
    </router-link>
  </div>
</div>
</template>

<script>

export default {
  name: 'Blog',
  data() {
    return {
      allPoste: this.$store.state.listBlog //récupération des postes du store
    }
  }
}
</script>

<style>
.blog{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.blog .singlePost{
  display: flex;
  color: black;
  border: 1px solid white;
  border-radius: 25px;
  width: 70vw;
  margin-bottom: 50px;
}

.blog .singleLeft img{
  width: 400px;
  height: 300px;
  border-radius: 25px;
}

.blog .allPosts a{
  text-decoration: none;
}

.blog .singleRight h1{
  text-decoration: underline;
  margin-bottom: 10px;
  margin: 25px 0;
}

.blog .title{
  margin: 20px 0;
}

.blog .singleRight{
  margin: 0 25px;
}
</style>
