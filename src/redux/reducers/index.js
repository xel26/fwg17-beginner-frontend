import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import auth from "./auth";
import profile from "./profile";
import product from "./product"

const authConfig = {
    key: 'auth',
    storage
}

const reducer = combineReducers({
    auth: persistReducer(authConfig, auth),
    profile,
    product
})

export default reducer