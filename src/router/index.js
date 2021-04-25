import Vue from "vue";
import VueRouter from "vue-router";
import cookies from "vue-cookies";
import Login from "../views/Login.vue";
import Base from "../views/Base.vue";
import Home from "../views/Home.vue";
import Proker from "../views/Proker.vue";
import Profile from "../views/Profile.vue";
import Department from "../views/Department.vue";
import Register from "../views/Register.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/admin/",
    name: "Base",
    component: Base,
    children: [
      {
        path: "dashboard",
        name: "Home",
        component: Home,
      },
      {
        path: "profile",
        name: "Profile",
        component: Profile,
      },
      {
        path: "proker",
        name: "Proker",
        component: Proker,
      },
      {
        path: "department",
        name: "Department",
        component: Department,
      },
    ],
  },
  {
    path: "/register/",
    name: "Register",
    component: Register,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});


router.beforeEach((to, from, next) => {
  if (to.path === "/register") {
    return next();
  }
  if (to.path === "/") {
    cookies.keys().forEach((cookie) => cookies.remove(cookie));
    return next();
  }
  if (cookies.get("next") == null || cookies.get("token") == null) {
    return next({ name: "Login" });
  } else {
    return next();
  }
});

export default router;
