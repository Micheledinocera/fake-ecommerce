<template>
  <div :class="['layout-container',$route.meta.layout]">
    <NuxtLayout>
      <NuxtScrollbar id="layout-content">  
        <NuxtPage/>
      </NuxtScrollbar>
    </NuxtLayout>
  </div>
</template>

<style lang="sass">
body
  margin: 0
  font-family: Poppins
  font-weight: 500
.layout-container
  #layout-content
    height: calc(100vh - 2*$base-height)
    background-color: lightblue
  &.auth
    #layout-content
      height: calc(100vh - $base-height)
</style>