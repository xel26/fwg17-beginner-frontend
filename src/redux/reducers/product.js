import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {}
}

const product = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.data = action.payload
        }
    }
})

export const {setProduct} = product.actions
export default product.reducer