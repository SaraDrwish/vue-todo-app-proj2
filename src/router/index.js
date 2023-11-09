import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
 
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title : "Home"
    }
  },
  {
    path: '/show-todos',
    name: 'ShowTodos',
    component: ()=> import("@/views/ShowTodos.vue")  ,
    meta: {
      title : "Show Todos"
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
