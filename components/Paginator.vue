<template>
    <div class="paginator-container">
        <div class="first" @click="page=1" v-if="page>1">{{'<<'}}</div>
        <div class="current-2" @click="page=page-2" v-if="page>=3"> {{ page-2 }}</div>
        <div class="current-1" @click="page--" v-if="page>=2">{{ page-1 }}</div>
        <div class="current"> {{ page }}</div>
        <div class="current+1" @click="page++" v-if="page<=pageLimit-1"> {{ page+1 }}</div>
        <div class="current+2" @click="page=page+2" v-if="page<=pageLimit-2"> {{ page+2 }}</div>
        <div class="last" @click="page=pageLimit" v-if="page<pageLimit">{{'>>'}}</div>
    </div>
</template>

<script setup lang="ts">
const page = usePage();
const pageLimit = usePageLimit();
</script>

<style scoped lang="sass">
.paginator-container
    display: flex
    height: 40px
    align-items: center
    margin-bottom: 10px
    float: right
    padding-right: 30px
    >div
        margin: 8px
        padding: 8px
        font-weight: 600
        &:not(.current)
            border: solid 1px lightgray
            background-color: white
            cursor: pointer
            @include hover-std
</style>