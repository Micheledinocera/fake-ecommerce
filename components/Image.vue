<template>
    <template v-if="!isError">
        <div v-if="isLoadingImage" class="skeleton"></div>
        <img :class="[{'hide':isLoadingImage},imageClass]" :src="src" :alt="alt" @load="()=>isLoadingImage=false" @error="()=>isError=true">
    </template>
    <template v-else>
        <img :src="error" :alt="'not-found'">
    </template>
</template>

<script setup lang="ts">
    const isLoadingImage=ref(true);
    const isError=ref(false);
    defineProps<{ src: string,alt: string, error: string,imageClass: string }>()
</script>

<style scoped lang="sass">
img,.skeleton
    width: 100%
    object-fit: contain
    &.hide
        opacity: 0
        height: 0
.skeleton
    @include skeleton-loader
</style>