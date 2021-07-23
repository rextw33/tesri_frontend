import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Profile from '@/views/Profile.vue'
import News from '@/views/news/index.vue'
import Policies from '@/views/policies/index.vue'
import Contacts from '@/views/contacts/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/policies',
    name: 'Policies',
    component: Policies
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
