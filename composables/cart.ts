import { Product } from "./serverProduct";

export interface Cart {
    products: Product[];
    total:number;
    id:number;
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

    const updateCart = async (productId:number,cartId:number,quantity=1 as number) => {
        const objectToSend={
            "merge":true,
            "products":[{
                id:productId,
                quantity:quantity
            }]
        }
        const url='https://dummyjson.com/carts/'+cartId;
        const { data } = await useLazyFetch<Cart>(url,{
            method: 'PUT',
            body: objectToSend
        });
        cart.value=data.value?data?.value as Cart:null
        return data
    }

    return{ getCart,updateCart }
}