import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'
import Registrasi from '../views/Registrasi'
import Beranda from '../views/Beranda'
import SoalBaru from '../views/SoalBaru'
import Layout from '../components/Layout'
import LayoutAdmin from '../components/LayoutAdmin'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Registrasi',
    component: Registrasi
  },
  {
    path: '/pages',
    name: 'pages',
    component: Layout,
    children: [ 
      {
        path: 'beranda',
        name: 'Beranda',
        component: Beranda,
      }
      
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: LayoutAdmin,
    children: [ 
      {
        path: 'soalbaru',
        name: 'Soal Baru',
        component: SoalBaru,
      }
      
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
