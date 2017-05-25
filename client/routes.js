/**
 * Pages
 */
import Admin from './components/pages/Admin'
import Dashboard from './components/pages/Dashboard'
import Login from './components/pages/Login'
import Error404 from './components/pages/Error'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: { requiresAuth: true }
  }
]

const error = [
  {
    path: '*',
    name: 'error',
    component: Error404
  }
]

export default [].concat(routes, error)
