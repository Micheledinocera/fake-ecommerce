import { Product } from "./serverProduct";

export interface Cart {
    products: Product[];
    total:number
    discountedTotal: number;
}

export interface CartResponse{
    carts: Cart[]
}

export const useServerCart= async () => {
    const cart = useCart();

    const getCart = async () => {
        const url='https://dummyjson.com/carts/user/1';
        const { data } = await useLazyFetch<CartResponse>(url);
        cart.value=data.value?data?.value?.carts[0] as Cart:null
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