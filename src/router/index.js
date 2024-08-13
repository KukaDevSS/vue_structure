import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/components/layouts/DefaultLayout.vue';
import Dashboard from '../views/Dashboard.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: Dashboard,
        },
        {
          path: '/list',
          name: 'list',
          component: () => import('../views/List.vue')
        },
        {
          path: '/settings',
          name: 'settings',
          component: () => import('../views/Settings.vue')
        },
        {
          path: 'helps',
          name: 'helps',
          component: () => import('../views/Helps.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/list_details',
      name: 'list_details',
      component: () => import('../components/common/ListDetails.vue')
    }
  ]
});

export default router
