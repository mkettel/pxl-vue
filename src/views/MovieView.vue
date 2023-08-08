<script setup>
// use this endpoint: https://64cd647fbb31a268409aa8a6.mockapi.io/api
// import the movie Store
import { useMoviesStore } from '@/stores/movie';
import { onMounted, ref, computed } from 'vue';

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


  // ref for filtered text
  const filterText = ref('');

  // computed for filtered movies
  const filteredMovies = computed(() => {
    // if there is no filter text, return all movies
    if (!filterText.value) return movieStore.movies;
    // otherwise, return the filtered movies
    return movieStore.movies.filter((movie) => {
      return movie.name.toLowerCase().includes(filterText.value.toLowerCase()) ||
      movie.synopsis.toLowerCase().includes(filterText.value.toLowerCase())
    });
  });


  // Ref for ADDING a movie
  const newMovieName = ref('');
  const newMovieSynopsis = ref('');

  // Function for ADDING a movie
  const addMovie = async () => {
    const newMovie = {
      name: newMovieName.value,
      synopsis: newMovieSynopsis.value,
      createdAt: Date.now() / 1000
    };
    try {
      await movieStore.addMovie(newMovie);
      addMovie.value.name = ''; // clear the name
      addMovie.value.synopsis = ''; // clear the synopsis
    } catch (error) {
      console.log(error);
      console.log(movieStore);
    }
  }

  // Ref for DELETING a movie
  const movieToDelete = ref(null);

  // Function for DELETING a movie
  const deleteMovie = async (movieId) => {
    try {
      console.log(movieId);
      await movieStore.deleteMovie(movieId);
    } catch (error) {
      console.log(error);
      console.log(movieToDelete);
    }
  }

</script>

<template>
  <main>

    <div class="main-header">
      <h1>Movies</h1>
      <!-- <p>Here are some movies that we have worked on.</p> -->
      <div class="add-movie-form">
        <!-- <h2>Add a movie</h2> -->
        <div class="input-row">
          <input class="input movie" type="text" v-model="newMovieName" placeholder="Name" />
          <input class="input movie" type="text" v-model="newMovieSynopsis" placeholder="Synopsis" />
          <button class="pri-butt" @click="addMovie">Add Movie</button>
        </div>
      </div>
    </div>
    <!-- temporary add movie form -->
    <div class="filter">
      <input class="input" type="text" v-model="filterText" placeholder="Search movies by name or synopsis..." />
    </div>
    <div class="table-container">
      <div v-if="movieStore.loading" class="movie-loader">Loading...</div>
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
        <tr v-for="movie in filteredMovies" :key="movie.id">
          <td>{{ movie.name }}</td>
          <td>{{ movie.synopsis }}</td>
          <td>{{ formatReleaseDate(movie.createdAt) }}</td>
          <td>
            <button class="pri-butt" @click="deleteMovie(movie.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </main>
</template>

<style scoped>

@media (min-width: 760px) {
  .main-header {
    display: flex;
    /* flex-direction: column; */
    margin-bottom: 20px;
    padding: 10px 0px;
    min-width: 500px;
    background-color: #181818;
    justify-content: space-between;
    align-items: center;
  }
  .main-header h1 {
    font-size: 60px;
    /* color: #01BD7E; */
  }
  .filter {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 0px;
  }
  .input {
    width: 30%;
    padding: 10px;
    border-radius: 5px;
    background-color: transparent;
    border: 1px solid #646464;
    color: #9F9F9F;
  }
  .input:focus {
    outline: none;
    border: 1px solid #01BD7E;
    color: #fff;
  }
  .table-container {
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 1px solid #01BD7E;
    border-radius: 10px;
  }
  .table-container table {
    border-collapse: collapse;
    width: 100%;
    height: 300px;
  }
  .table-container thead {
    background-color: #181818;
    color: #fff;
    font-size: 22px;
  }
  .table-container tbody {
    text-align: center;
    cursor: pointer;
  }
  .table-container tr:hover {
    background-color: #646464;
    border-radius: 10px;
  }
}

/* Add Movie Form */
.add-movie-form {
  display: flex;
  flex-direction: column;
}
.add-movie-form h2 {
  margin-bottom: 10px;
  font-size: 28px;
}
.input-row {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.add-movie-form .input {
  margin: 0px 10px;
  width: 200px;
}
.add-movie-form .input:nth-child(1) {
  margin-left: 0px;
}
.add-movie-form .pri-butt {
  margin-left: 10px;
}
</style>
