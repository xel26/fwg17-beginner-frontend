import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    total: []
}

const totalOrder = createSlice({
    name: "totalOrder",
    initialState,
    reducers: {
        setTotal: (state, action) => {
            state.total.push(action.payload)
        },
        resetTotal: () => {
            return initialState
        },
        removeTotal: (state, action) => {
            state.total.splice(action.payload, 1)
        }
    }
})

export const {setTotal, resetTotal, removeTotal} = totalOrder.actions
export default totalOrder.reducer