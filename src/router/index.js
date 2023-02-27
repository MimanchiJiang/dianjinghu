import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import History from '../views/History.vue'
import Doc from '../views/Doc.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Login
  },
  {
    path: '/doc', component: Doc, children: [
      { path: '', redirect: '/doc/about' },
      { path: 'history', component: History },
      { path: 'about', component: About }

    ]
  },
  { path: '/login', component: Login }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
