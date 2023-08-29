<template>
    <Head>
        <Title> Listing Products </Title>
    </Head>
    <template v-if="pendingListing">
        <div class="listing-container">
            <ProductCard v-for="item in [...Array(10).keys()]" :product="null" :isSkeleton="true"/>
        </div>
    </template>
    <template v-else>
        <div class="listing-container">
            <ProductCard v-for="product in products" :product="product" @click="router.push({path:'/'+RouterNames.PRODUCT+'/'+product.id})" :isSkeleton="false"/>
        </div>
        <Paginator/>
    </template>
</template>

<script setup lang="ts">
import { Product, ProductsResponse } from 'composables/serverProduct';

const page = usePage();
const pageLimit = usePageLimit();
const router = useRouter();
let limit=ref("10");
let pendingListing=ref(true);
let products=ref([]) as Ref<Product[]|undefined>;
const { getListingProducts } = await useServerProduct();

const skip=computed(()=>(parseInt(limit.value)*page.value)+"")

const listingProductsAction=async ()=>{
    pendingListing.value=true;
    var response=await getListingProducts(limit.value,skip.value) as Ref<ProductsResponse>
    products.value=response.value?.products;
    pageLimit.value=((response.value?.total??0) / parseInt(limit.value))-1;
    pendingListing.value=false;
}

listingProductsAction();

onMounted(()=>{listingProductsAction();});

watch(page, () => { 
    listingProductsAction(); 
});

</script>

<style scoped lang="sass">
.listing-container
    display: flex
    flex-flow: wrap
</style>composables/product