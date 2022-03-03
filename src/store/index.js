import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    videos: [],
    request: '',
  },

  mutations: {
    incrementSearch: function (state, query) {
      state.request = query
    },

    setVideos: function (state, videos) {
      state.videos = videos
    }

  },

  actions: {
    addSelect: function () {
      console.log('ok')
      fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=34ea506b7db361019c0b6d3f0d76d3f6&query=${this.state.request}&language=fr-FR`
        )
        .then((response) => response.json())
        .then((json) => {
          this.commit('setVideos', json.results);
        });
    },
  },

  getters: {

  },

  modules: {

  },
});