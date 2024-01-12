import { createSlice } from "@reduxjs/toolkit";

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
        resetQuantities: () => {
            return initialState
        },
        removeQuantity: (state, action) => {
            state.quantities.splice(action.payload, 1)
        }
    }
})

export const {setQuantity, resetQuantities, removeQuantity} = quantityProducts.actions
export default quantityProducts.reducer