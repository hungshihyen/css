import Yoga from '../yoga/index.vue'
import YogaHome from '../yoga/home/index.vue'

export default {
  path: '/',
  component: Yoga,
  children: [
    {
      path: '/',
      component: YogaHome
    }
  ]
}
