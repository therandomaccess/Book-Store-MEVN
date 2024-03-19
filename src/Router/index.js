import { createRouter, createWebHistory } from "vue-router";
import ContactView from "../views/ContactView.vue";
import HomeView from "../views/HomeView.vue";
import BooksView from "../views/BooksView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/books",
      name: "books",
      component: BooksView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
  ],
  linkActiveClass: "active-link",
});

export default router;
