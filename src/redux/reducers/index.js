import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import auth from "./auth";
import profile from "./profile";
import products from "./products"
import totalOrder from "./totalOrder";
import deliveryShipping from "./deliveryShipping";
import sizeProducts from "./sizeProducts";
import variantProducts from "./variantProducts";
import quantityProducts from "./quantityProducts";
import productsId from "./productsId";
import emailCustomer from "./emailCustomer";
import fullNameCustomer from './FullNameCustomer'
import deliveryAddress from "./deliveryAddress";

const authConfig = {
    key: 'auth',
    storage
}

const reducer = combineReducers({
    auth: persistReducer(authConfig, auth),
    profile,
    products,
    totalOrder,
    deliveryShipping,
    sizeProducts,
    variantProducts,
    quantityProducts,
    productsId,
    emailCustomer,
    fullNameCustomer,
    deliveryAddress
})

export default reducer