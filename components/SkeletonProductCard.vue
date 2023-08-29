<template>
    <div class="card">
        <div class="discount"> -{{ product.discountPercentage }}% </div>
        <img loading="lazy" :src="product.thumbnail" :alt="product.title">
        <div class="title"> {{ product.title }}</div>
        <div class="brand"> {{ product.brand }}</div>
        <div class="desc"> {{ product.description }}</div>
        <div class="price-container">
            <div class="price"> {{ product.price }}€ </div>
            <div class="special-price"> {{ specialPrice }}€ </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { Product } from 'composables/serverProduct';

    const props = defineProps<{ product: Product }>()

    const specialPrice=computed(()=> (props.product.price*(1-props.product.discountPercentage/100)).toFixed(2))
</script>

<style scoped lang="sass">
.card
    display: block
    width: calc(20% - 32px)
    margin: 16px 8px
    cursor: pointer
    border-radius: 8px
    padding: 6px
    background-color: white
    @include hover-std
    img
        width: 100%
        height: 220px
        object-fit: contain
    .discount
            color: #808080
            font-weight: 600
            background-color: lightgreen
            display: flex
            align-items: center
            padding: 0 6px
            height: auto
            border-radius: 8px
            color: black
            position: absolute
            margin-top: 2px
            margin-left: calc(20% - 92px)
            font-size: 12px
    >div
        height: 2*$card-row-height
        line-height: $card-row-height
        &.desc
            height: 3*$card-row-height
            overflow: hidden
            -webkit-box-orient: vertical
            -webkit-line-clamp: 3
            display: -webkit-box
            font-weight: 300
        &.price-container
            display: flex
            margin-top: 8px
            align-items: center
            .price
                color: #808080
                text-decoration: line-through black
            .special-price
                font-weight: 600
                margin-left: auto
</style>