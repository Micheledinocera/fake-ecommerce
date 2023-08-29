<template>
    <div class="header">
        <div class="logo" @click="()=>router.push({name:RouterNames.HOME})"> </div>
        <div class="user" v-if="!user" @click="()=>router.push({name:RouterNames.LOGIN})"> </div>
        <div class="user logged" @click="()=>showRightPanel('user')" v-else> <img :src="user.image"> </div>
        <div class="cart" v-if="user" @click="()=>showRightPanel('cart')"> <div class="counter" v-if="cart?cart.products.length>0:false"> {{cart?.products.length}} </div> </div>
    </div>
</template>

<script setup lang="ts">
const router = useRouter();
const cart = useCart();
const user = useUser();
const showPanel = useShowPanel();
const rightPanelType = usePanelType();

const showRightPanel=(panelType:"user"|"cart")=>{
    rightPanelType.value=panelType;
    showPanel.value=true;
}
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
            &.logged
                background-image: none
                img
                    width: 100%
                    height: 100%
                    object-fit: contain
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
