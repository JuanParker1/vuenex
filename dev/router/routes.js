import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

export const routes = [
  {
    name: 'Home',
    path: '/',
    component: HomeView
  },
  {
    name: 'About',
    path: '/about',
    component: AboutView
  }
]
