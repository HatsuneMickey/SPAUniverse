import { Router } from './router.js'

const router = new Router()
router.add('/', "/pages/home.html")
router.add('/Home', "/pages/home.html")
router.add("/Universo", "/pages/universo.html")
router.add("/Exploracao", "/pages/exploracao.html")
router.add("404", "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()