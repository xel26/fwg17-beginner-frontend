import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shipping: "Dine In"
}

const deliveryShipping = createSlice({
    name: "deliveryShipping",
    initialState,
    reducers: {
        setShipping: (state, action) => {
            state.shipping = action.payload
        },
        resetShipping: () => {
            return initialState
        }
    }
})

export const {setShipping, resetShipping} = deliveryShipping.actions
export default deliveryShipping.reducer