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

// Convert the date to a readable format
const formatReleaseDate = (timestamp) => {
    // (converting seconds to milliseconds) saving the date in a variable
    const date = new Date(timestamp * 1000);

    // Use the Date object's methods to get the components of the date
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, so we add 1
    const day = String(date.getDate()).padStart(2, '0');

    // Format the date in "YYYY-MM-DD" format
    return `${year}-${month}-${day}`;
  };

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
          <td>{{ formatReleaseDate(movie.createdAt) }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<style scoped>

</style>
