import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/PageHome.vue'
import RentalMobilCategory from '../views/PageCategoryRentalMobil.vue'
import TourTravelCategory from '../views/PageCategoryTourTravel.vue'
import TourTravelDetail from '../views/PageTourTravel.vue'
import pageIndex from '../views/PageIndex.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/index',
        name: 'Index',
        component: pageIndex
    },
    {
        path: '/category-rental-mobil',
        name: 'RentalMobilCategory',
        component: RentalMobilCategory
    },
    {
        path: '/category-tour-travel',
        name: 'TourTravelCategory',
        component: TourTravelCategory
    },
    {
        path: '/tour-travel',
        name: 'TourTravelDetail',
        component: TourTravelDetail
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
