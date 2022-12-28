import router from './router'
router.beforeEach((to,from,next)=>{
    // console.log(to, from,"全局路由守卫进入")
    next()

})
router.afterEach((to, from )=>{
    // console.log(to,from,"全局路由守卫离开")

})
export default router