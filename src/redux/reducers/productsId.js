import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: []
}

const productsId = createSlice({
    name: "totalOrder",
    initialState,
    reducers: {
        setId: (state, action) => {
            state.id.push(action.payload)
        },
        resetId: () => {
            return initialState
        },
        removeId: (state, action) => {
            state.id.splice(action.payload, 1)
        }
    }
})

export const {setId, resetId, removeId} = productsId.actions
export default productsId.reducer