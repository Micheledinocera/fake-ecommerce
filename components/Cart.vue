<template>
    <div class="loading" v-if="pendingCart">
        <Loader/>
    </div>
    <div class="items-list" v-else-if="products.length>0">
        <div class="cart-item" v-for="cartItem in products">
            <div class="delete" @click="()=>removeProductFromCart(cartItem.id)"> X </div>
            <div class="title"> {{ cartItem.title }} </div>
            <div class="price"> {{ cartItem.discountedPrice }}€ </div>
        </div>
        <div class="total">
            <div class="title"> Total </div>
            <div class="price"> {{ cart?.discountedTotal }}€ </div>
        </div>
    </div>
    <div class="empty" v-else> 
        <div class="label"> Empty Cart </div>
    </div>
</template>

<script setup lang="ts">
const cart=useCart();
const { deleteCart } = await useServerCart();
const pendingCart= ref(false)

const products=computed(()=>cart.value?cart.value.products.filter(product=>product.quantity>0):[])

const removeProductFromCart=async (productId:number)=>{
    pendingCart.value=true;
    await deleteCart(productId,cart.value?cart.value.id:0);
    pendingCart.value=false;
}

</script>

<style scoped lang="sass">
.cart-item,.total
    display: flex
    margin: 8px 10px
    .delete
        color: palevioletred
        font-weight: 600
        cursor: pointer
        display: flex
        align-items: center
        &:hover
            color: darkred
    .title
        margin-left: 10px
    .price
        margin-left: auto
.total
    border-top: solid 1px lightgray
    margin-top: 20px
    padding-top: 20px
    font-weight: 600
.empty
    height: 100%
    background-image: url("/assets/imgs/empty-cart.png")
    background-size: contain
    background-repeat: no-repeat
    background-position: center
    .label
        text-align: center
        padding-top: calc(30vh)
.loading
    background-color: darkseagreen
    display: grid
    height: 100%
    span 
        margin: auto
</style>