import { createSlice } from "@reduxjs/toolkit";
const productSlice=createSlice({
    name:'productSlice',
    initialState:{
        cart:[]
    },
    reducers:{
        addItem:(state,action)=>{
            //@ts-ignore
            state.cart.push(action.payload);

        },
     removeItems:(state,action)=>{
        //@ts-ignore
            state.cart.pop(action.payload);
        },
    

    }
});
export default productSlice.reducer;
export const {addItem}=productSlice.actions;
