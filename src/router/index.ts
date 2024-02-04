import { createRouter, createWebHistory } from 'vue-router'
import flexBox from '@/views/flexbox.vue'
import login from '@/views/login.vue';

const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/flexBox',
      name: 'flexBox',
      component: flexBox
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
});


export default routes
