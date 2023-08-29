<template>
    <Head>
        <Title> FAKE ECOMMERCE </Title>
    </Head>
    <div class="container"> 
        <div class="title"> FAKE ECOMMERCE </div>
        <CarouselContainer :images="[imageUrl('Image1'),imageUrl('Image2'),imageUrl('Image3')]"/>
        <div class="link-container"> <NuxtLink :to="{name:RouterNames.LISTING}"> All Products </NuxtLink> </div>
    </div>
</template>

<script setup lang="ts">
const imageUrl=(text:string)=>{
    return "https://image.dummyjson.com/400x200/008080/ffffff?text="+text+"!&fontFamily=cookie&fontSize=16"
}
</script>

<style scoped lang="sass">
.container
    height: 120vh
    .title
        font-weight: 600
        font-size: 40px
        text-align: center
        margin: 40px
    .link-container
        display: flex
        margin: 30px
        a
            margin: auto
</style>