<script setup>
// use this endpoint: https://64cd647fbb31a268409aa8a6.mockapi.io/api
// import the movie Store
import { useMoviesStore } from '@/stores/movie';
import { onMounted } from 'vue';

// Get the movie Store from the store
const movieStore = useMoviesStore();

// Fetch the movies when the component is mounted
onMounted(() => {
  movieStore.fetchMovies();
});

</script>

<template>
  <main>
    <h1>Movie</h1>
    <div v-if="movieStore.loading">Loading...</div>
    <div v-if="movieStore.error">{{ movieStore.error }}</div>
    <table v-else>
      <thead>
        <tr>
          <th>Name</th>
          <th>Synopsis</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="movie in movieStore.movies" :key="movie.id">
          <td>{{ movie.name }}</td>
          <td>{{ movie.synopsis }}</td>
          <td>{{ movie.createdAt }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<style scoped>

</style>
