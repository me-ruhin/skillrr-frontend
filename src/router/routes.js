
import home from '../components/home'
import login from '../components/auth/login'
import register from '../components/auth/register'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }, {
    path: '/register',
    name: 'register',
    component: register
  }
]

