import Vue from "vue"
import vueRouter from "vue-router"

Vue.use(vueRouter)
const routes = [
    {
        path:'/login',
        name:"login",
        component: ()=> import('@/login')
    },
    {
        path:'/',
        name:"home",
        component: ()=> import('@/view/home'),
        children:[
            {
                path:"/productor",
                name:'productor',
                component:()=> import ('@/view/productor')
            }
        ]
    },
]

export default new vueRouter({
    mode:"history",
    routes
})