import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@landing/HomeView.vue'
import PartnerView from '@/views/landing/PartnerView.vue'
import AboutView from '@landing/AboutView.vue'
import VacationView from '@/views/landing/VacationView.vue'
import PropertyView from '@/views/landing/PropertyView.vue'
import OtomotifView from '@/views/landing/OtomotifView.vue'
import PIMallView from '@/views/landing/PIMallView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/partner',
      name: 'partner',
      component: PartnerView,
    },
    {
      path: '/aboutUs',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/vacation',
      name: 'vacation',
      component: VacationView,
    },
    {
      path: '/property',
      name: 'property',
      component: PropertyView,
    },
    {
      path: '/otomotif',
      name: 'otomotif',
      component: OtomotifView,
    },
    {
      path: '/piMall',
      name: 'PIMALL',
      component: PIMallView,
    },
    //   {
    //     path: '/about',
    //     name: 'about',
    //     // route level code-splitting
    //     // this generates a separate chunk (About.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import('../views/AboutView.vue'),
    //   },
  ],
})

export default router
