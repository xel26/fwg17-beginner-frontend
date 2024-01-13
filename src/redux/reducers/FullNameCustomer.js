import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fullName : ''
}

const fullNameCustomer = createSlice({
    name: 'fullNameCustomer',
    initialState,
    reducers: {
        setFullName: (state, action) => {
            state.fullName = action.payload
        },
        resetName: () => {
            return initialState
        }
    }
})

export const {setFullName, resetName} = fullNameCustomer.actions
export default fullNameCustomer.reducer