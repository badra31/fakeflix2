import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Favoris from '../views/ShowFavoris.vue'
import FilmView from '../views/FilmView.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/film/:id',
    name: 'film',
    component: () => import('../views/FilmInfo.vue')
  },
  {
    path: '/favoris',
    name: 'Favoris',
    component: Favoris
  },
  {
    path: '/view',
    name: 'filmview',
    component: FilmView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router