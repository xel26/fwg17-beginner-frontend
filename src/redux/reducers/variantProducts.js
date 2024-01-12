import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    variants: []
}

const variantProducts = createSlice({
    name: "variantProducts",
    initialState,
    reducers: {
        setVariant: (state, action) => {
            state.variants.push(action.payload)
        },
        resetVariants: () => {
            return initialState
        },
        removeVariant: (state, action) => {
            state.variants.splice(action.payload, 1)
        }
    }
})

export const {setVariant, resetVariants, removeVariant} = variantProducts.actions
export default variantProducts.reducer