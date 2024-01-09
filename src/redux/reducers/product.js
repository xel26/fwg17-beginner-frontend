import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

const product = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.data.push(action.payload)
        },
        resetProducts: () => {
            return initialState
        }
    }
})

export const {setProduct, resetProducts} = product.actions
export default product.reducer