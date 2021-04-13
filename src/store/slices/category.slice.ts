import { createSlice } from "@reduxjs/toolkit";
import { Category, StoreState } from "../../types";

const categorySlice = createSlice({
    name : "category",
    initialState : {
        value : [
            new Category("Electronics", 10),
            new Category("Men's Wear", 5),
            new Category("Women's Wear", 7),
            new Category("Drones", 2)
        ]
    },
    reducers : {
        createCategories(s, a){
            s.value = a.payload
        }
    }
})

export default categorySlice.reducer
export const {createCategories} = categorySlice.actions