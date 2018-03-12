import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/pages/home/Home').default
    },
    {
      path: '/next-level',
      name: 'next-level',
      component: require('@/pages/nextlevel/NextLevel').default
    }
  ]
})
