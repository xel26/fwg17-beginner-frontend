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
        resetFullName: () => {
            return initialState
        }
    }
})

export const {setFullName, resetFullName} = fullNameCustomer.actions
export default fullNameCustomer.reducer