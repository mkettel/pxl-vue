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
    }
  }
});
