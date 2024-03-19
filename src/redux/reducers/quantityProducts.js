import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    quantities: []
}

const quantityProducts = createSlice({
    name: "totalOrder",
    initialState,
    reducers: {
        setQuantity: (state, action) => {
            state.quantities.push(action.payload)
        },
        updateQuantity: (state, action) => {
            state.quantities[action.payload.index] = state.quantities[action.payload.index] + action.payload.quantity
        },
        resetQuantities: () => {
            return initialState
        },
        removeQuantity: (state, action) => {
            state.quantities.splice(action.payload, 1)
        }
    }
})

export const {setQuantity, updateQuantity, resetQuantities, removeQuantity} = quantityProducts.actions
export default quantityProducts.reducer