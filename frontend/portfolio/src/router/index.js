import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'


// import Velocity from 'velocity-animate'
import Router from 'vue-router'
import Home from '@/components/Home'
import Work from '@/components/Work'
import AboutMe from '@/components/AboutMe'
import Gallary from '@/components/Gallery'
import Contact from '@/components/Contact'
import { Carousel3d, Slide } from 'vue-carousel-3d';

Vue.use(BootstrapVue)
Vue.use(Router)

Vue.component('Slide', Slide)
Vue.component('Carousel3d', Carousel3d)


import VueLazyLoad from 'vue-lazyload'
import LightBox from 'vue-image-lightbox'

Vue.use(VueLazyLoad, {
    preLoad: 1.3,
    error: 'https://dummyimage.com/130x120/ccc/999.png&text=Not+Found',
    loading: 'https://dummyimage.com/130x120/dcdcdc/999.png&text=Now loading',
    attempt: 1
})
Vue.component('light-box', LightBox);

require('vue-image-lightbox/dist/vue-image-lightbox.min.css')

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