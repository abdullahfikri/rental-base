import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "./assets/tailwind.css";
import LoginPage from "./components/LoginPage/LoginPage.vue";
import WelcomePage from "./components/WelcomePage/WelcomePage.vue";
import DashboardPage from "./components/Dashboard/DashboardPage.vue";
import TransaksiPage from "./components/Dashboard/Transaksi/TransaksiPage.vue";
import PelangganPage from "./components/Dashboard/Pelanggan/PelangganPage.vue";
import AllPelangganPage from "./components/Dashboard/Pelanggan/AllPelangganPage.vue";
import MobilPage from "./components/Dashboard/Mobil/MobilPage.vue";

import TambahPelangganPage from "./components/Dashboard/TambahPage/TambahPelangganPage.vue";
import TambahTransaksi from "./components/Dashboard/TambahPage/TambahTransaksi.vue";
import TambahMobil from "./components/Dashboard/TambahPage/TambahMobil.vue";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
    faCar,
    faXmark,
    faBook,
    faBuilding,
    faPlus,
    faRightFromBracket,
    faUser,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
    faCar,
    faXmark,
    faBook,
    faBuilding,
    faPlus,
    faRightFromBracket,
    faUser
);

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/admin/login", component: LoginPage },
        {
            path: "/dashboard",
            component: DashboardPage,
            children: [
                {
                    path: "mobillist",
                    component: MobilPage,
                },
                {
                    path: "transaksi",
                    component: TransaksiPage,
                },
                {
                    path: "tambahtransaksi/:nik",
                    component: TambahTransaksi,
                },
                {
                    path: "tambahmobil",
                    component: TambahMobil,
                },
                {
                    path: "tambah",
                    component: TambahPelangganPage,
                },
                {
                    path: "pelanggan",
                    component: AllPelangganPage,
                },
                {
                    path: "pelanggan/:id",
                    component: PelangganPage,
                },
            ],
        },
        { path: "", component: WelcomePage },
    ],
});

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.component("");

app.use(router).mount("#app");
