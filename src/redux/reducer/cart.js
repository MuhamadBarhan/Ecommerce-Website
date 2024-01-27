import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:'cart',
    initialState:{
        list:[],
    },
    reducers:{
        addItem:(state,{payload})=>{
            state.list=[...state.list,payload]
        }
    }
});


export const {addItem}=cartSlice.actions;

export default cartSlice.reducer;