<template>
    <p>single Blog</p>
    <div class="post">
        <h1>{{ post.title }}</h1>
        <p>{{ post.metaTitle }}</p>
        <p>{{ post.metaDescription }}</p>
        <p>{{ post.content }}</p>
        <img :src="post.image" alt="image">
    </div>
</template>

<script>

export default {
  name: 'SingleBlog',
  data() {
    return {
        post: this.$store.state.listBlog[this.$route.params.id]
    }
  }
}
</script>

<style>

</style>
