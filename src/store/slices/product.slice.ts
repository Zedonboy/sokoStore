import { createSlice } from "@reduxjs/toolkit"
import { Product } from "../../types"

const productSlice = createSlice({
    name : "product",
    initialState : {
        value : [
            new Product("Chair", 300, "http://placehold.it/350x150", "UGX", 10, "Lovely Chair"),
            new Product("Table", 100, "http://placehold.it/350x150", "UGX", undefined, "Lovely Chair"),
            new Product("Cup", 45, "http://placehold.it/350x150", "UGX", 5, "Lovely Chair"),
            new Product("Sound System", 10, "http://placehold.it/350x150", "UGX", undefined, "Lovely Chair")
        ]
    },
    reducers : {
        createProducts (state, action){
            state.value = action.payload
        }
    }
})

export default productSlice.reducer
export const {createProducts} = productSlice.actions