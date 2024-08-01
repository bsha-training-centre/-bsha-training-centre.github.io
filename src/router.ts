import { createWebHistory, createRouter } from "vue-router"
import { Router } from "vue-router"

import type { RouteRecordRaw } from "vue-router";

import Home from "./views/Home.vue"
import Certificate from "./views/Certificate.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: import.meta.env.BASE_URL,
    name: "Home",
    component: Home
  },
  {
    path: import.meta.env.BASE_URL + "certificate",
    name: "Certificate",
    component: Certificate
  }
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
