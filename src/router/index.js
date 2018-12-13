import Vue from 'vue'
import Router from 'vue-router'
import firebase from '../services/Firebase';

import Login from '@/components/login/Login'
import SignUp from '@/components/signup/SignUp'
import ListBooks from '@/components/book/List'

Vue.use(Router)

const router = new Router({
  linkActiveClass: "active",
  routes: [
	{
		path: '*',
		redirect: '/books'
	},
  {
    path: '/login',
    component: resolve => require(['../components/layout/Login'], resolve),
    children: [
      {
          path: '/',
          name: 'Login',
          component: Login
      },
    ]
  },
  {
    path: '/signup',
    component: resolve => require(['../components/layout/Login'], resolve),
    children: [
      {
          path: '/',
          name: 'SignUp',
          component: SignUp
      },
    ]
  },
  {
    path: '/books',
    component: resolve => require(['../components/layout/App'], resolve),
    children: [
      {
        path: '/',
        name: 'Books',
        component: ListBooks,
        meta: {
          requiresAuth: true
        }
      }
    ]
  }
  ]
})

router.beforeEach((to, from, next) => {
	let currentUser = firebase.auth().currentUser
	let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

	if (requiresAuth && !currentUser) {
		next('/login');
	}
	else if (currentUser && to.path.toString() == '/login') {
        next('/');
	}
	else if (requiresAuth && currentUser) {
		next()
	}
	else {
		next()
	}
})

export default router
