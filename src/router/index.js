import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Author from '../views/Author'
import Work from '../views/Work.vue'
import Contact from '../views/Contact'
import WebMap from '../views/WebMap'
import Doc from '../views/Doc.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Doc
  },
  {
    path: '/doc', component: Doc, children: [
      { path: '', redirect: '/doc/about' },
      { path: 'work', component: Work },
      { path: 'webmap', component: WebMap },
      { path: 'contact', component: Contact },
      { path: 'author', component: Author },
      { path: 'about', component: About }

    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
