import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Header from '@/components/Header'
import maptest from '@/view/maptest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/header',
      name: 'header',
      component: Header
    },
    {
      path: '/map',
      name: 'maptest',
      component: maptest
    }
  ]
})
