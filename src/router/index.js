import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/view/home'
import member from '@/view/member'
import car from '@/view/car'
import search from '@/view/search'
import news from '@/view/news/news'
import photos from '@/view/photos/photos'
import message from '@/view/message/message'
import shopping from '@/view/shopping/shopping'
import relation from '@/view/relation/relation'
import video from '@/view/video/video'
import newinfo from '@/view/news/newinfo'
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
    {path:'/home/news',name:'news',component:news},
    {path:'/home/photos',name:'photos',component:photos},
    {path:'/home/message',name:'message',component:message},
    {path:'/home/shopping',name:'shopping',component:shopping},
    {path:'/home/relation',name:'relation',component:relation},
    {path:'/home/video',name:'video',component:video},
    {path:'/home/newinfo/:id',name:'newinfo',component:newinfo},
  ]
})
