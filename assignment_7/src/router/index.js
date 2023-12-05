import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/TeamView.Vue'
import TeamView from '../views/TeamView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/members',
    name: 'members',
    component: HomeView
  },
  {
    path: '/teams',
    name: 'teams',
    component: TeamView
  }
]

//Create router
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
