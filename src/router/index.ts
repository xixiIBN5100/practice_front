import { createRouter, createWebHistory } from 'vue-router'
import flexBox from '@/views/flexbox.vue'

const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/flexBox',
      name: 'flexBox',
      component: flexBox
    }
  ]
});


export default routes
