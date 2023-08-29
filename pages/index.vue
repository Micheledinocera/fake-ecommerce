<template>
    <Head>
        <Title> {{tempSinglePost?.title}} </Title>
    </Head>
    <div class="container"> 
        <!-- Add Product
        <div class="add-product">
            <input v-model="tempName"/>
            <button @click="addButtonCLick"> Aggiungi </button>
        </div>
        ProductsList 
        <div class="products-list">
            <div :class="['product-item',{active:product.isActive}]" v-for="(product,index) in products" @click="toggleActiveProductByIndex(index)"> {{product.name}} </div>
        </div> -->
        <!-- ActiveProductsList
        <div class="products-list">
            <div :class="['product-item',{active:product.isActive}]" v-for="product in activeProducts"> {{product.name}} </div>
        </div> -->
        <!-- PostsList
        <div class="posts-list">
            <div class="loader" v-if="postsPending"> Loading </div>
            <div class="post-item" v-for="post in posts" v-else>
                <div class="title"> {{ post.title }}</div>
                <div class="body"> {{ post.body }}</div>
            </div>
        </div> -->
        <!-- SinglePost
        <div class="get-single-post">
            <input type="number" v-model="tempId"> <button @click="tempId--">Previous</button> - <button @click="tempId++">Next</button>
        </div>
        <div class="single-post">
            <div class="loader" v-if="singlePostPending"> Loading </div>
            <div class="post-item" v-else>
                <div class="title"> {{ tempSinglePost?.title }}</div>
                <div class="body"> {{ tempSinglePost?.body }}</div>
            </div>
        </div> -->
        <NuxtLink :to="{name:RouterNames.LISTING}"> GO PRODUCTS </NuxtLink>
    </div>
</template>

<script setup lang="ts">
import { Post } from 'composables/posts';

const tempName=ref("");
let tempId=ref(1);
let tempSinglePost: Ref<Post | null>;
let singlePostPending=ref(true);

const { products,addProduct,toggleActiveProductByIndex,activeProducts } = useProducts();
const { posts,pending: postsPending,getSinglePost } = await usePosts();

watch(tempId, () => { 
    singlePostAction(); 
});

const singlePostAction=()=>{
    singlePostPending.value=true;
    getSinglePost(tempId)
    .then(response=> tempSinglePost=response )
    .finally(()=>singlePostPending.value=false)
}

const addButtonCLick = ()=>{
    addProduct(tempName.value);
    tempName.value="";
}

singlePostAction()

</script>

<style scoped lang="sass">
.container
    height: 120vh
.products-list
    .product-item
        background-color: red
        cursor: pointer
        &.active
            background-color: lightgray
</style>