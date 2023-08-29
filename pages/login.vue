<template>
    <div class="container"> 
        <div class="login-button" @click="toHome"> Login </div>
    </div>
</template>

<script setup lang="ts">
import { LayoutNames } from '../utils/StaticNames';

definePageMeta({
  layout: LayoutNames.AUTH,
});

const router = useRouter();
const toHome = () => { router.push({name:'index'}); }

</script>

<style scoped lang="sass">
.container
    display: flex
    .login-button
        margin: auto
        padding: 10px 6px
        background-color: blue
        border-radius: 8px
        cursor: pointer
        color: white
</style>