<template>
  <p>blog</p>
  <div class="allPosts" v-for="post in allPoste" :key="post.title">
    <h1>{{ post.title }}</h1>
    <p>{{ post.metaTitle }}</p>
    <p>{{ post.metaDescription }}</p>
    <p>{{ post.content }}</p>
    <img :src="post.image" alt="image">
  </div>
</template>

<script>

export default {
  name: 'Blog',
  data() {
    return {
      allPoste: this.$store.state.listBlog
    }
  }
}
</script>

<style>

</style>
