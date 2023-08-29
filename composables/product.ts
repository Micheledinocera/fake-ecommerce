export interface Product {
    quantity: number;
    discountedPrice: number;
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    stock: number;
    brand: number;
    category: string;
    images: string[];
    thumbnail: string;
}

export interface ProductsResponse{
    limit:number,
    total:number,
    skip:number,
    products:Product[]
}

export const useServerProduct= async () => {

    const getSingleProduct = async (id : string|string[]) => {
        const url='https://dummyjson.com/products/'+id;
        const { data } = await useLazyFetch<Product>(url);
        return data
    }

    const getListingProducts = async (limit : string|string[],skip : string|string[]) => {
        const url='https://dummyjson.com/products?limit='+limit+'&skip='+skip;
        const { data } = await useLazyFetch<ProductsResponse>(url);
        return data
    }

    return{ getSingleProduct,getListingProducts }
}