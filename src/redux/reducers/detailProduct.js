import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null
}

const detailProduct = createSlice({
    name: 'detailProduct',
    initialState,
    reducers: {
        setDetailProduct: (state, action) => {
            state.data = action.payload
        },
        resetDetailProduct: () => {
            return initialState
        }
    }
})

export const {setDetailProduct, resetDetailProduct} = detailProduct.actions
export default detailProduct.reducer