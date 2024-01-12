import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sizes: []
}

const sizeProducts = createSlice({
    name: "sizeProducts",
    initialState,
    reducers: {
        setSize: (state, action) => {
            state.sizes.push(action.payload)
        },
        resetSizes: () => {
            return initialState
        },
        removeSize: (state, action) => {
            state.sizes.splice(action.payload, 1)
        }
    }
})

export const {setSize, resetSizes, removeSize} = sizeProducts.actions
export default sizeProducts.reducer