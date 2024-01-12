import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

const products = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.data.push(action.payload)
        },
        resetProducts: () => {
            return initialState
        },
        removeProduct: (state, action) => {
            state.data = state.data.filter((product) => product.id !== action.payload)
        } 
    }
})

export const {setProduct, resetProducts, removeProduct} = products.actions
export default products.reducer