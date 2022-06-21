import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "./assets/tailwind.css";
import LoginPage from "./components/LoginPage/LoginPage.vue";
import WelcomePage from "./components/WelcomePage/WelcomePage.vue";
import DashboardPage from "./components/Dashboard/DashboardPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/admin/login", component: LoginPage },
    { path: "/dashboard", component: DashboardPage },
    { path: "", component: WelcomePage },
  ],
});

createApp(App).use(router).mount("#app");
