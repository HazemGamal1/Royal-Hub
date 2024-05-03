import { create } from "zustand";
import { persist } from "zustand/middleware";
import { fullProduct } from "../utils/interfaces/interface";

interface useCartType {
    cart: fullProduct[],
    addToCart: (item: fullProduct) => void,
    removeFromCart: (name : string) => void,
    clearCart: () => void
}

const useCart = create<useCartType>(
    (set) => ({
        cart: [],
        addToCart: (item : fullProduct) => set(state => ({cart : [...state.cart, item]})),
        removeFromCart: (name : string) => set(state => ({cart: state.cart.filter(product => product.name !== name)})),
        clearCart: () => set({cart: []})
    })
)

export default useCart;