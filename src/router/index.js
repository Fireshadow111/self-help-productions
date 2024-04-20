import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
   
    component: () => import( '../views/AboutView.vue')
  },
{
  path:'/artists',
  name: 'artists',
  component: () => import( '../views/ArtistsView.vue')

},

{

  path: '/clients',
  name: 'clients',
  component: () => import( '../views/ClientsView.vue')

}



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
