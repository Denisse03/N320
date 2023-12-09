import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/Allsession.vue'
import sessionView from '../views/UsersessionView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sessions',
    name: 'sessions',
    component: sessionView
  }
]

//Create router
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
