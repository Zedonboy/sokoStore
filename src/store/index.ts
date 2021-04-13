import { configureStore } from "@reduxjs/toolkit";
import bagReducer from "./slices/bag.slice"
import sideNavReducer from "./slices/sideNav.slice"
import addressReducer from "./slices/address.slice"
import productReducer from "./slices/product.slice"
import categoryReducer from "./slices/category.slice"
import headerReducer from "./slices/header.slice"
import appReducer from "./slices/app.slice"
export default configureStore({
    reducer : {
        bag : bagReducer,
        sideNav: sideNavReducer,
        address: addressReducer,
        product: productReducer,
        category: categoryReducer,
        header: headerReducer,
        appConfig: appReducer
    }
})