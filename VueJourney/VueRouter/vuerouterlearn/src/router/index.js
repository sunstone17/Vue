import VueRouter from "vue-router";

import Vue from "vue";
const Home = () => import("../components/Home");
const About = () => import("../components/About");
const User = () => import("../components/User");
const HomeMessage = () => import('../components/HomeMessage')
const HomeNews = () => import('../components/HomeNews')
//1. vue安装插件
Vue.use(VueRouter);

//配置映射关系
//路径和组件映射关系
const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  //一个映射一个对象
  {
    path: "/home",
    component: Home,
    children:[
      {
        path: '',
        redirect: 'message'
      },{
        path:'message',
        component: HomeMessage,
      },{
        path:'news',
        component: HomeNews,
      }
    ]
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/user/:userId",
    component: User
  }
];
//2. 实例化
const router = new VueRouter({
  routes,
  mode: "history", //路由模式选择
  linkActiveClass: "active" //router-link被选中状态
});

export default router;
