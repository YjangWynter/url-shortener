import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/website',
      name: 'website',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/WebsiteView.vue')
    }, 
    {
      path:'/linkedin',
      name:'linkedin',
      component: () => import('../views/LinkedinView.vue')
    },
    {
      path:'/github',
      name:'github',
      component: () => import('../views/GithubView.vue')
    },
    {
      path:'/discord',
      name:'discord',
      component: () => import('../views/DiscordView.vue')
    },

    { //Not Found
      path: '/:pathMatch(.*)*', 
      name:'NotFound', 
      component: () => import('../views/NotFoundView.vue')
    },
  ]
})

export default router
