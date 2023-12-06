import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/TeamView.vue'
import TeamView from '../views/teamView.vue'
import MemberView from '../views/memberView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/members',
    name: 'members',
    component: MemberView
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
