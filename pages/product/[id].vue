<template>
    <Head>
        <Title> {{product?.title}} </Title>
    </Head>
    <template v-if="pendingProduct">
        Loading
    </template>
    <template v-else>
        <div class="product-container" >
            <div class="left-container">
                <CarouselContainer :images="product?.images"/>
            </div>
            <div class="right-container">
                <div class="info-container">
                    <div class="title">{{product?.title}}</div>
                    <div class="brand">{{product?.brand}}</div>
                    <div class="price-container">
                        <div class="price"> {{ product?.price }}€ </div>
                        <div class="special-price"> {{ specialPrice }}€ </div>
                    </div>
                    <div v-if="user" class="add-to-cart" @click="addToCart">
                        <div class="button-container">
                            <Loader v-if="pendingAddToCart"></Loader>
                            <span v-else> ADD TO CART </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>
</template>

<script setup lang="ts">
import { Product } from 'composables/product';

let route=useRoute();
let cart=useCart();
let user=useUser();
let pendingProduct=ref(true);
let pendingAddToCart=ref(false);
let product=ref({}) as Ref<Product | undefined | null>;

const specialPrice=computed(()=> ((product?.value?.price??1)*(1-(product?.value?.discountPercentage??0)/100)).toFixed(2))
const { getSingleProduct } = await useServerProduct();
const { updateCart } = await useServerCart();

const singleProductAction=async ()=>{
    pendingProduct.value=true;
    product=await getSingleProduct(route.params.id) as Ref<Product>;
    pendingProduct.value=false;
}

const addToCart=async ()=>{
    pendingAddToCart.value=true;
    await updateCart(product.value?product.value.id:0,cart.value?cart.value.id:0);
    pendingAddToCart.value=false;
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
            .title
                font-weight: 600
                color: black
                font-size: 50px
            .brand
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
            .add-to-cart
                margin-top: 30px
                >.button-container
                    background-color: darkolivegreen
                    color: white
                    font-weight: 600
                    cursor: pointer
                    padding: 8px 14px
                    border-radius: 6px
                    width: 130px
                    margin: auto
                    display: flex
                    span
                        margin: auto
</style>composables/product