import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
routes: [
// 	{path:'/', redirect:'/HelloWorld'},
    {path:'/',name:'登录',component:resolve =>{require(['@/components/HelloWorld'],resolve)}}
	]
})