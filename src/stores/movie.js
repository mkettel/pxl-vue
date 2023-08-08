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
      this.loading = true;
      try {
        const response = await fetch('https://64cd647fbb31a268409aa8a6.mockapi.io/api/movies');
        const data = await response.json();
        this.movies = data;
        console.log(data);
      } catch (error) {
        console.log(error);
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    }
  }
});
