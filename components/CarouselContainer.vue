<template>
    <Carousel :itemsToShow="1.95" :wrapAround="true" :transition="500">
      <Slide v-for="(slide,index) in images" :key="slide+'_'+index">
        <Image :src="slide" :alt="slide+'_'+index" error="~/assets/imgs/product-not-found.jpg" imageClass="carousel__item"/>
      </Slide>
    </Carousel>
</template>

<script setup lang="ts">
    defineProps<{ images: string[]|undefined }>()
</script>

<style scoped lang="sass">
:deep(.carousel__item)
    width: 100%
    object-fit: contain
    height: 100%
.carousel__slide
  padding: 5px
.carousel__viewport
  height: 400px
:deep(.carousel__track)
  transform-style: preserve-3d
  height: 400px
.carousel__slide--sliding
  transition: 0.5s
  opacity: 0.9
  transform: rotateY(-20deg) scale(0.9)
.carousel__slide--active ~ .carousel__slide
  transform: rotateY(20deg) scale(0.9)
.carousel__slide--prev
  opacity: 1
  transform: rotateY(-10deg) scale(0.95)
.carousel__slide--next
  opacity: 1
  transform: rotateY(10deg) scale(0.95)
.carousel__slide--active
  opacity: 1
  transform: rotateY(0) scale(1.1)
</style>