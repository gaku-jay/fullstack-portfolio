import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
// import Velocity from 'velocity-animate'
import Router from 'vue-router'
import Home from '@/components/Home'
import Work from '@/components/Work'
import AboutMe from '@/components/AboutMe'
import Gallary from '@/components/Gallery'
import Contact from '@/components/Contact'

Vue.use(BootstrapVue)
    // Vue.use(Velocity)
Vue.use(Router)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/work',
            name: 'Work',
            component: Work

        },
        {
            path: '/aboutMe',
            name: 'AboutMe',
            component: AboutMe

        },
        {
            path: '/gallery',
            name: 'Gallary',
            component: Gallary

        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact

        }
    ]
})