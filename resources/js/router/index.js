import { createRouter , createWebHistory } from "vue-router";

// import home from "../components/Home.vue";
// import about from "../components/About.vue";
import home from "../components/Home.vue";
import about from "../components/About.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: home,
    },
    {
        path: "/about",
        name: "about",
        component: about,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
 });
  export default router;
