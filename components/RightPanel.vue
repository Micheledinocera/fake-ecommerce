<template>
    <div :class="['panel-overlay',{show:showPanel}]" @click="showPanel=false">
        <div class="panel-container" @click.stop="">
            <Cart v-if="panelType=='cart'" />
            <User v-else/>
        </div>
    </div>
</template>

<script setup lang="ts">
const showPanel=useShowPanel();
const panelType=usePanelType();
</script>

<style scoped lang="sass">
$panel-width:300px
.panel-overlay
    position: fixed
    top: 0
    left: 0vw
    width: 100vw
    height: 100vh
    z-index: -1
    background-color: rgba(0,0,0,0)
    cursor: pointer
    transition: background-color 0.25s ease-in-out
    &.show
        background-color: rgba(0,0,0,0.25)
        z-index: 1
        .panel-container
            left: calc(100vw - $panel-width)
    .panel-container
        position: absolute
        background-color: white
        width: $panel-width
        left: 100vw
        left: 100vw
        height: 100vh
        cursor: auto
        transition: left 0.5s ease-in-out
</style>