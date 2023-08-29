import { Product } from "./product";

export interface Cart {
    products: Product[];
    total:number;
    id:number;
    discountedTotal: number;
}

export interface CartResponse{
    carts: Cart[]
}

export const useCart = () => useState<Cart|null>('cart')

export const useServerCart= async () => {
    const cart = useCart();
    const user = useUser();

    const getCart = async () => {
        const url='https://dummyjson.com/carts/user/'+(user.value?user.value.id:0);
        const { data } = await useLazyFetch<CartResponse>(url);
        cart.value=data.value?data?.value?.carts[0] as Cart:null
    }

    const updateCart = async (productId:number,cartId:number,quantity=1 as number) => {
        var products=cart.value?cart.value.products:[]
        const objectToSend={
            products:[...products,{
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
    }

    const deleteCart = async (productId:number,cartId:number) => {
        var products=(cart.value?cart.value.products:[]).filter(product=>product.id!=productId)
        const objectToSend={
            products:products
        }
        const url='https://dummyjson.com/carts/'+cartId;
        const { data } = await useLazyFetch<Cart>(url,{
            method: 'PUT',
            body: objectToSend
        });
        cart.value=data.value?data?.value as Cart:null
    }

    return{ getCart,updateCart,deleteCart }
}