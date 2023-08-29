<template>
    <!-- <div @click="redirect()"> {{headerLabel}} </div> -->
    <div class="header">
        <div class="logo" @click="()=>router.push({name:RouterNames.HOME})"> </div>
        <div class="user" @click="()=>router.push({name:RouterNames.LOGIN})"> </div>
        <div class="cart" @click="showCart=true"> <div class="counter" v-if="cart?cart.products.length>0:false"> {{cart?.products.length}} </div> </div>
    </div>
</template>

<script setup lang="ts">
// import { CartResponse } from 'composables/cart';


const router = useRouter();
const cart = useCart();
const showCart = useShowCart();
// const cart= ref([]);
const { getCart } = await useServerCart();
// const isHome= computed(()=>{
//     return router.currentRoute.value.name==RouterNames.HOME
// })

// const headerLabel = computed(() => {
//   return isHome?"Home":RouterNames.LOGIN;
// })

// const redirect = ()=>{
//     if(isHome) router.push({name:RouterNames.LOGIN})
//     else router.push({name:RouterNames.HOME})
// }

// const getCartAction=async ()=>{
    // pendingProduct.value=true;
    // const data=await getCart();
    // cart.value=data.value?data?.value?.carts[0].products:[]
    // pendingProduct.value=false;
// }

// onMounted(()=>{getCartAction();});

// getCartAction();

onMounted(()=>{getCart();});

getCart();

</script>

<style scoped lang="sass">
.header
    @include header-row
    display: flex
    >div
        background-repeat: no-repeat
        background-position: center
        background-size: contain
        cursor: pointer
        height: 70%
        width: 100px
        &.logo
            background-image: url("/assets/imgs/logo.png")
            width: 160px
            margin-left: 20px
        &.user
            background-image: url("/assets/imgs/account_circle.svg")
            margin-left: auto
        &.cart
            background-image: url("/assets/imgs/cart.svg")
            margin-left: 20px
            .counter
                margin-top: -6px
                border-radius: 10px
                margin-left: 56px
                background-color: lightcoral
                width: fit-content
                padding: 2px 6px
                font-weight: 700
                font-size: 12px
</style>
