import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email : ''
}

const emailCustomer = createSlice({
    name: 'emailCustomer',
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload
        },
        resetEmail: () => {
            return initialState
        }
    }
})

export const {setEmail, resetEmail} = emailCustomer.actions
export default emailCustomer.reducer