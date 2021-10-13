import { createRouter, createWebHashHistory } from 'vue-router'
import yoga from './yoga'
const routes = [
  yoga,
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return new Promise((resolve) => {
        resolve(savedPosition)
      })
    }
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
