import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
    name : "header",
    initialState : {
        nodes : []
    },

    reducers : {
        insertHeaderNode(s, a){
            //@ts-ignore
            s.nodes.push(a.payload)
        },

        removeHeaderNode(s, a){
            s.nodes.splice(a.payload, 1)
        },

        clearHeaderNode(s, a){
            s.nodes = []
        }
    }
})

export default headerSlice.reducer
export const {insertHeaderNode, removeHeaderNode, clearHeaderNode} = headerSlice.actions