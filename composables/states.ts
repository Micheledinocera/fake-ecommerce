import { Product } from "./serverProduct"

export const usePage = () => useState<number>('page', () => 1)
export const usePageLimit = () => useState<number>('pageLimit')
export const useCart = () => useState<Product[]>('cart', ()=>[])