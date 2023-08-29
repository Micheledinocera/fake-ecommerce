<template>
    <div class="container"> 
        <div class="login-container">
            <template v-if="pendingLogin"> <Loader/> </template>
            <template v-else>
                <input type="text" placeholder="Username" v-model="username"/>
                <input type="text" placeholder="Password" v-model="password"/>
                <div class="login-button" @click="loginAction"> Login </div>
            </template>
        </div>
        <div class="credentials">
            All users here <NuxtLink to="https://dummyjson.com/users" target="_blank"> https://dummyjson.com/users! </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: LayoutNames.AUTH,
});

const router = useRouter();
const { login } = await useServerUser();
const user = useUser();

const username=ref('');
const password=ref('');
const pendingLogin=ref(false);

const loginAction=async ()=>{
    pendingLogin.value=true;
    await login(username.value,password.value)
    pendingLogin.value=false;
    if(user.value) router.push({name:RouterNames.HOME})
}

</script>

<style scoped lang="sass">
.container
    .login-container
        width: 50%
        margin: 50px auto
        display: grid
        input
            width: 50%
            margin: 10px auto
            height: 40px
        .login-button
            width: 50%
            text-align: center
            margin: auto
            padding: 10px 6px
            background-color: blue
            border-radius: 8px
            cursor: pointer
            color: white
    .credentials
        text-align: center
</style>