import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    deliveryAddress : ''
}

const deliveryAddress = createSlice({
    name: 'addressCustomer',
    initialState,
    reducers: {
        setDeliveryAddress: (state, action) => {
            state.deliveryAddress = action.payload
        },
        resetdeliveryAddress: () => {
            return initialState
        }
    }
})

export const {setDeliveryAddress, resetdeliveryAddress} = deliveryAddress.actions
export default deliveryAddress.reducer