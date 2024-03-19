import { combineReducers } from "@reduxjs/toolkit"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import auth from "./auth"
import profile from "./profile"
import products from "./products"
import detailProduct from './detailProduct'
import totalOrder from "./totalOrder"
import deliveryShipping from "./deliveryShipping"
import sizeProducts from "./sizeProducts"
import variantProducts from "./variantProducts"
import quantityProducts from "./quantityProducts"
import productsId from "./productsId"
import emailCustomer from "./emailCustomer"
import fullNameCustomer from './FullNameCustomer'
import deliveryAddress from "./deliveryAddress"

const authConfig = {
    key: 'auth',
    storage
}


const productsCartConfig = {
    key: 'products',
    storage
}


const totalOrderConfig = {
    key: 'totalOrder',
    storage
}


const sizeProductsConfig = {
    key: 'sizeProducts',
    storage
}


const variantProductsConfig = {
    key: 'variantProducts',
    storage
}


const quantityProductsConfig = {
    key: 'quantityProducts',
    storage
}


const productsIdConfig = {
    key: 'productsId',
    storage
}


const reducer = combineReducers({
    auth: persistReducer(authConfig, auth),
    profile,
    products: persistReducer(productsCartConfig, products),
    totalOrder: persistReducer(totalOrderConfig, totalOrder),
    deliveryShipping,
    sizeProducts: persistReducer(sizeProductsConfig, sizeProducts),
    variantProducts : persistReducer(variantProductsConfig, variantProducts),
    quantityProducts : persistReducer(quantityProductsConfig, quantityProducts),
    productsId: persistReducer(productsIdConfig, productsId),
    emailCustomer,
    fullNameCustomer,
    deliveryAddress,
    detailProduct
})

export default reducer