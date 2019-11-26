import Vue from "vue";
import Router from "vue-router";
import store from "./_store/store";

import Login from "./views/Pages/Login.vue";
import Layout from "./components/Layout/Layout.vue";
//import Clientes from "@/views/Aplicacion/Clientes/Clientes";

const Clientes = () => import('@/views/Aplicacion/Clientes/Clientes.vue')
const Creditos = () => import('@/views/Aplicacion/Creditos/Creditos.vue')

Vue.use(Router);

let router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "/clientes",
          name: "clientes",
          component: Clientes,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "/reg_creditos",
          name: "reg_creditos",
          component: Creditos,
          meta: {
            requiresAuth: true
          }
        },
      ]
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
