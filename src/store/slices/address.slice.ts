import { createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
    name : "address",
    initialState : {
        value : []
    },

    reducers : {
        insertAddress(s, a) {
            //@ts-ignore
            s.value.push(a.payload)
        },

        removeAddress(s, a) {
            s.value.splice(a.payload, 1)
        },

        updateAddress(s, a){
            //@ts-ignore
            s.value[a.payload.index] = a.payload.data
        }
    }
})

export default addressSlice.reducer
export const {insertAddress, removeAddress, updateAddress } = addressSlice.actions