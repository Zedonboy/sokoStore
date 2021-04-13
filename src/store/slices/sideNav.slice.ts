import { createSlice } from "@reduxjs/toolkit";

const sideNav = createSlice({
    name : "sideNav",
    initialState : {
        value : false,
        nodes : []
    },
    reducers : {
        toggleSideNav(state, action){
            if(state.value) state.value = false
            else state.value = true
        },

        insertSideNavNode(s, a){
            //@ts-ignore
            s.nodes.push(a.payload)
        },

        removeSideNavNode(s, a){
            s.nodes.splice(a.payload, 1)
        },

        clearAllSideNav(s, a){
            s.nodes = []
        }

    }
})

export default sideNav.reducer
export const {toggleSideNav, insertSideNavNode, removeSideNavNode, clearAllSideNav} = sideNav.actions