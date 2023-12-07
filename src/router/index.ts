 import { createRouter, createWebHistory } from 'vue-router';
 export default createRouter({
  history: createWebHistory(),
  routes:[
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      name:'Home',
      component:()=>import('@/pages/home/index.vue')
    }
  ],
  scrollBehavior(){
  return {
  left:0,
  top:0
  }}
})