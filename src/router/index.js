import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/view/home'
import member from '@/view/member'
import car from '@/view/car'
import search from '@/view/search'

Vue.use(Router)

export default new Router({
  //样式名更改
  linkActiveClass:'mui-active',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect:{path:'/home'},
      component: HelloWorld
    },
    {path:'/home',name:'home',component:home},
    {path:'/member',name:'member',component:member},
    {path:'/car',name:'car',component:car},
    {path:'/search',name:'search',component:search},
    
  ]
})
