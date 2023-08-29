import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp
        .component('Carousel',Carousel)
        .component('Slide',Slide)
})