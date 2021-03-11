<template>
<main>
  <Navbar />
</main>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
main{
  font-family: 'Montserrat', sans-serif;
  background-color: #E7E7E7;
  min-height: 100vh;
}
</style>
