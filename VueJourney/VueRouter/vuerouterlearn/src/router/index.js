import VueRouter from 'vue-router'

import Vue from 'vue'
import Home from '../components/Home'
import About from '../components/About'
//1. vue安装插件
Vue.use(VueRouter)

//配置映射关系
//路径和组件映射关系
const routes =[
  {
    path:'/',
    redirect:'/home'
  },
  //一个映射一个对象
  {
    path:'/home',
    component: Home,
  },{
    path:'/about',
    component: About,
  }
]
//2. 实例化
const router = new VueRouter({
  routes,
  mode: 'history',//路由模式选择
  linkActiveClass:'active'//router-link被选中状态
})

export default router