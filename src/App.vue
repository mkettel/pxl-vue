<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>

    <div class="wrapper">
      <div class="wrapper-left">
        <img alt="Vue logo" class="logo" src="@/assets/pxl.png" width="60" height="60" />
        <HelloWorld msg="PXL" subtitle="Creative Agency based out of LA" />
      </div>
    </div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/project">Projects</RouterLink>
      <RouterLink to="/movie">Movies</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

/* nav link component */
nav {
  font-size: 12px;
  margin-top: 2rem;
}
/* default styling */
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 860px) {
  header {
    display: flex;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
  }
  header .wrapper-left {
    display: flex;
  }

  nav {
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
    margin-top: 0px;
  }
}
@media (min-width: 600px) and (max-width: 860px) {
  nav {
    display: flex;
    justify-content: center;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
