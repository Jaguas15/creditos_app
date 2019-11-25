import Vue from "vue";
import Router from "vue-router";
import store from "./_store/store";

import Login from "./views/Pages/Login.vue";
import Layout from "./components/Layout/Layout.vue";
import Dashboard from "./components/Dashboard.vue";

Vue.use(Router);

let router = new Router({
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
          path: "",
          name: "dashboard",
          component: Dashboard,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "/empty",
          name: "empty",
          component: () => import("./components/EmptyPage.vue"),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "/Clientes",
          name: "cliente",
          component: () => import("./components/pages/clientes.vue"),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "/creditos",
          name: "creditos",
          component: () => import("./components/pages/creditos/creditos.vue"),
          meta: {
            requiresAuth: true
          }
		},
		
		{
			path: "/pagos",
			name: "pagos",
			component: () => import("./components/pages/pagos/pagos.vue"),
			meta: {
			  requiresAuth: true
			}
		  }
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
