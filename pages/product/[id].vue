<template>
    <Head>
        <Title> {{product?.title}} </Title>
    </Head>
    <template v-if="pendingProduct">
        CARICAMENTO
    </template>
    <template v-else>
        <div class="product-container" >
            <div class="left-container">
                <CarouselContainer :images="product?.images"/>
            </div>
            <div class="right-container">
                <div class="info-container">
                    <div class="brand">{{product?.brand}}</div>
                    <div class="title">{{product?.title}}</div>
                    <div class="price-container">
                        <div class="price"> {{ product?.price }}€ </div>
                        <div class="special-price"> {{ specialPrice }}€ </div>
                    </div>
                </div>
            </div>
        </div>
    </template>
</template>

<script setup lang="ts">
    import { Product } from 'composables/serverProduct';

    let route=useRoute();
    let pendingProduct=ref(true);
    let product=ref({}) as Ref<Product | undefined | null>;
    
    const specialPrice=computed(()=> ((product?.value?.price??1)*(1-(product?.value?.discountPercentage??0)/100)).toFixed(2))
    const { getSingleProduct } = await useServerProduct();

    const singleProductAction=async ()=>{
        pendingProduct.value=true;
        product=await getSingleProduct(route.params.id) as Ref<Product>;
        pendingProduct.value=false;
    }

    singleProductAction();
</script>

<style scoped lang="sass">
.product-container
    display: flex
    height: calc(100% - 26px)
    >div
        width: 50%
        display: flex
        align-items: center
        .info-container
            padding-left: 10px
            width: 100%
            text-align: center
            .brand
                font-weight: 600
                color: black
                font-size: 50px
            .title
                font-weight: 600
                font-size: 40px
                color: gray
            .price-container
                display: flex
                margin-top: 8px
                align-items: center
                .price
                    color: #808080
                    text-decoration: line-through black
                    margin-right: 10px
                .special-price
                    font-weight: 600
                    margin-left: 10px
                >div
                    margin: auto
                
</style>