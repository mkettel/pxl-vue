import { defineStore } from 'pinia'

//
export const useMoviesStore = defineStore({
  id: 'movies',
  // a function that returns a fresh state
  state: () => ({
    movies: [],
    loading: false,
    error: null
  }),
  // optional getters
  getters: {
    getMovies() {
      return this.movies;
    },
    getLoading() {
      return this.loading;
    },
    getError() {
      return this.error;
    }
  },
  // optional actions
  actions: {
    async fetchMovies() {
      this.loading = true; // set loading to true to display a spinner or something (need to add)
      this.error = null; // clear the error if there was one before
      try {
        const response = await fetch('https://64cd647fbb31a268409aa8a6.mockapi.io/api/movies');
        // check if the request was successful
        if (!response.ok) {
          throw new Error(`error! status: ${response.status}`);
        }
        const data = await response.json(); // get the data from the response as JSON
        // can check to see if it is json or not
        if (!Array.isArray(data)) {
          throw new Error('data is not an array');
        }
        this.movies = data;
        console.log(data);
      } catch (error) {
        console.log(error.message);
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    async addMovie(movie) {
      const response = await fetch('https://64cd647fbb31a268409aa8a6.mockapi.io/api/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
      });
      if (!response.ok) {
        throw new Error(`error! status: ${response.status} failed to add movie`);
      }
      const data = await response.json();
      this.movies.push(data); // add the new movie to the movies array
    },
    async deleteMovie(movieId) {
      const response = await fetch(`https://64cd647fbb31a268409aa8a6.mockapi.io/api/movies/${movieId}`, {
        method: 'DELETE'
        });
      if (!response.ok) {
        throw new Error(`error! status: ${response.status} failed to delete`);
      }
      // remove the movie from the movies array by filtering out the movie with the id that matches the movieId
      this.movies = this.movies.filter(movie => movie.id !== movieId);
    },
    async editMovie(movieId, updatedMovie) {
      const response = await fetch(`https://64cd647fbb31a268409aa8a6.mockapi.io/api/movies/${movieId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedMovie)
      });
      if (!response.ok) {
          throw new Error(`error! status: ${response.status} failed to edit movie`);
      }
      const data = await response.json();
      // Find the index of the movie in th movies array
      const index = this.movies.findIndex(movie => movie.id === movieId);

      // Update movie with the new details
      this.movies[index] = data;
    }
  }
});
