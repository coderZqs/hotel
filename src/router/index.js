import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: "/",
    redirect: "/admin"
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/exit",
    component: () => import("../views/back/exit")
  },
  {
    path: "/login",
    component: () => import("../views/login.vue")
  },
  {
    path: "/register",
    component: () => import("../views/register.vue")
  },
  {
    path: '/admin',
    name: 'home',
    component: () => import("../views/back/Admin.vue"),
    meta: {
      requireAuth: true
    },
    children: [{
        path: "goods_ad",
        component: () => import("../views/back/goods_admin.vue")
      },
      {
        path: "goods_order",
        component: () => import("../views/back/goods_order.vue")
      },
      {
        path: "blog",
        component: () => import("../views/back/blog.vue")
      },
      {
        path: "hotel_info",
        component: () => import("../views/back/hotel_info.vue")
      },
      {
        path: "*",
        component: () => import("../views/back/404.vue")
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/* 
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {

  }
  next();
}) */

export default router