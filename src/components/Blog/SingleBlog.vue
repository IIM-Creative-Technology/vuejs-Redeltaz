<template>
    <div class="post">
      <div class="topPost">
        <img :src="post.image" alt="image" v-if="post.image">
        <img src="@/assets/imgRef.jpg" alt="image" v-else>
      </div>
          <h1>{{ post.title }}</h1>
          <p>{{ post.content }}</p>
    </div>
</template>

<script>

export default {
  name: 'SingleBlog',
  data() {
    return {
        post: this.$store.state.listBlog[this.$route.params.id]//récupération de l'id en parametre de la route pour trouver le post correspondant
    }
  }
}
</script>

<style>

.post{
  border: 3px solid white;
  border-radius: 25px;
  width: 70vw;
  margin: 0 auto;
  text-align: center;
  padding: 20px 50px;
  margin-top: 50px;
}

.topPost img{
  width: 400px;
}

.post h1{
  margin: 20px 0;
}

</style>
