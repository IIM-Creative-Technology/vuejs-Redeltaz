<template>
    <nav>
        <router-link to="/admin">Gérer le Blog</router-link>
        <router-link to="/">Blog</router-link>
        <router-link to="/login">Login</router-link>
    </nav>
    <router-view/>
</template>

<script>

export default {
  name: 'Navbar',
}
</script>

<style>
nav{
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
}

nav a{
  color: black;
}

</style>
