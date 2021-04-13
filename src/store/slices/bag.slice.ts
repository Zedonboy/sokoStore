import { createSlice } from "@reduxjs/toolkit";
import { StoreState } from "../../types";

const bagSlice = createSlice({
    name : "bag",
    initialState : {
        value : []
    },

    reducers : {
        insertToBag(s, a) {
            //@ts-ignore
            s.value.push(a.payload)
        },

        updateItemInBag(s, a){
            //@ts-ignore
            s.value[a.payload.index] = a.payload.data
        },

        clearAllBag(s, a){
            s.value = []
        },

        removeItemFromBag(s, a){
            s.value.splice(a.payload, 1)
        }
    }
})

export default bagSlice.reducer
export const {insertToBag, clearAllBag, removeItemFromBag, updateItemInBag} = bagSlice.actions