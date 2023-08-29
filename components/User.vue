<template>
    <div class="user">
        <img :src="user?.image">
        <div class="name-container">
            <div class="hi"> Hi, </div>
            <div class="first-name"> {{user?.firstName}}</div>
            <div class="last-name"> {{user?.lastName}}</div>
        </div>
        <div class="logout" @click="logout"> Logout </div>
    </div>
</template>

<script setup lang="ts">
const user= useUser();
const showPanel= useShowPanel();

const logout=()=>{
    showPanel.value=false;
    user.value=null;
}
</script>

<style scoped lang="sass">
.name-container
    display: flex
    >div
        margin-left: 8px
        &.first-name,&.last-name
            font-weight: 600
.logout
    padding: 8px
    margin: auto
    background-color: lightgray
    cursor: pointer
</style>