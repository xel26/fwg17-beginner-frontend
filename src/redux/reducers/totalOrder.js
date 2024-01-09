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
        }
    }
})

export const {setTotal} = totalOrder.actions
export default totalOrder.reducer