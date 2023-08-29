import { Product } from "./serverProduct";

export interface Cart {
    products: Product[]
}

export interface CartResponse{
    carts: any[]
}

export const useServerCart= async () => {

    const getCart = async () => {
        const url='https://dummyjson.com/carts/user/1';
        const { data } = await useLazyFetch<CartResponse>(url);
        return data
    }

    const updateCart = async (productId:number) => {
        const objectToSend={
            "merge":true,
            "products":[{
                id:productId,
                quantity:1
            }]
        }
        const url='https://dummyjson.com/carts/user/1';
        const { data } = await useLazyFetch<CartResponse>(url,{
            method: 'POST',
            body: objectToSend
        });
        return data
    }

    return{ getCart,updateCart }
}