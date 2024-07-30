import { createWebHistory, createRouter } from "vue-router"
import { Router } from "vue-router"

const routes = [
  {
    path: import.meta.env.BASE_URL,
    name: "Home",
    component: () => import("./views/Home.vue")
  },
  {
    path: import.meta.env.BASE_URL + "certificate",
    name: "Certificate",
    component: () => import("./views/Certificate.vue") 
  },
]


const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
