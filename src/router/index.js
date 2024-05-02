import { createRouter, createWebHistory } from "vue-router";

import Discover from "../screens/Discover.vue";
import About from "../screens/About.vue";
import Help from "../screens/Help.vue";
import FRPBypass from "../screens/FRPBypass.vue";
import Error from "../screens/Error.vue";

const routes = [
    {path: '/', component: Discover},
    {path: '/about', component: About},
    {path: '/help', component: Help},
    {path: '/cookyourfone', component: FRPBypass},
    {path: '/:err(.*)*', component: Error},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router