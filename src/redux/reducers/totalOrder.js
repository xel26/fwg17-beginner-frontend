import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    total: 0
}

const totalOrder = createSlice({
    name: "totalOrder",
    initialState,
    reducers: {
        setTotal: (state, action) => {
            state.total += action.payload
        },
        resetTotal: () => {
            return initialState
        }
    }
})

export const {setTotal, resetTotal} = totalOrder.actions
export default totalOrder.reducer