<template>
    <div>
        <NuxtLink :to="{name:RouterNames.LISTING}" class="back"> {{"<"}} To Products </NuxtLink>
        <NuxtPage />
    </div>
</template>

<style scoped lang="sass">
div
    height: 100%
    .back
        margin-left: 10px
        margin-top: 10px
</style>