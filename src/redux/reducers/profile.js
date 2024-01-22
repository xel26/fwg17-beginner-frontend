import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {}
}

const profile = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfile: (state, action) => {
            state.data = action.payload
        },
        resetProfile: () => {
            return initialState
        }
    }
})

export const {setProfile, resetProfile} = profile.actions
export default profile.reducer 