import Vue from 'vue'
import Router from 'vue-router'
import TryTp from '@/pages/trytp/TryTp.vue'
import NextLevel from '@/pages/nextlevel/NextLevel.vue'
import Home from '@/pages/home/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/next-level',
      name: 'next-level',
      component: NextLevel
    },
    {
      path: '/try-typ',
      name: 'try-typ',
      component: TryTp
    }
  ]
})
