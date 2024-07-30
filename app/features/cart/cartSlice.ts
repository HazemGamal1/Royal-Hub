import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fullProduct } from '@/app/utils/interfaces/interface'
import { cartItem } from '@/app/utils/interfaces/interface'

interface cartState {
    items: cartItem[]
}
const initialState : cartState = {
    items: []
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action : PayloadAction<cartItem>) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action : PayloadAction<string>) => {
            state.items = state.items.filter((item) => item.name !== action.payload)
        },
        clearCart: (state) => {
            state.items = []
        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;