import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import auth from "./auth";
import profile from "./profile";
import product from "./product"
import totalOrder from "./totalOrder";
import deliveryShipping from "./deliveryShipping";

const authConfig = {
    key: 'auth',
    storage
}

const reducer = combineReducers({
    auth: persistReducer(authConfig, auth),
    profile,
    product,
    totalOrder,
    deliveryShipping
})

export default reducer