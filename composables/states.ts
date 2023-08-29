import { Cart } from "./cart"

export const usePage = () => useState<number>('page', () => 1)
export const usePageLimit = () => useState<number>('pageLimit')
export const useShowCart = () => useState<boolean>('showCart', ()=>false)
export const useCart = () => useState<Cart|null>('cart')