export interface IProduct {
    name: string;
    isActive?: boolean;
}

export default class Product {
    name: string;
    isActive: boolean | undefined;
  
    constructor(data?: IProduct) {
      this.name = data ? data.name : "";
      this.isActive =  data && data.isActive ? data.isActive : true;
    }
}

export const useProducts= () => {
    const products = ref([]) as Ref<Product[]>;

    const addProduct = (name : string)=> products.value.push(new Product({name:name}));
    const toggleActiveProductByIndex = (index:number) => products.value[index].isActive=!products.value[index].isActive;
    const activeProducts = computed(() =>products.value.filter(product=>product.isActive))

    return{
        products,
        addProduct,
        toggleActiveProductByIndex,
        activeProducts
    }
}