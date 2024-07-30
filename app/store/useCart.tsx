import { create } from "zustand";
import { persist } from "zustand/middleware";
import { cartItem, fullProduct } from "../utils/interfaces/interface";

interface useCartType {
    cart: cartItem[],
    setCart: (arr : cartItem[]) => void,
    addToCart: (item: cartItem) => void,
    removeFromCart: (name : string) => void,
    clearCart: () => void
}

const useCart = create<useCartType>()(
    persist(
        (set) => ({
            cart: [],
            setCart: (arr: cartItem[]) => set({cart: arr}),
            addToCart: (item : cartItem) => set(state => ({cart : [...state.cart, item]})),
            removeFromCart: (name : string) => set(state => ({cart: state.cart.filter(product => product.name !== name)})),
            clearCart: () => set({cart: []})
        }),
        {
            name: 'cart-storage',
        }
    )
);

export default useCart;