import data from '../db/db';
import { newProductType } from './../product.types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const productSlice = createSlice({
    name: 'productSlice',
    initialState: {
        cart: [] as newProductType[],
        cartPrice: 0,
        dataFiltered:data as newProductType[]
    },
    reducers: {
        addData:(state,action: PayloadAction<newProductType>)=>{
            //@ts-expect-error
            state.dataFiltered=action.payload;
            console.log(state.dataFiltered);



        },
        addItem: (state, action: PayloadAction<newProductType>) => {
            let newProduct = { ...action.payload,quantity:1};
            const existingProdIdx = state.cart.findIndex((item) => item.id === newProduct.id);
            if (existingProdIdx === -1) {
                state.cart.push(newProduct);
                state.cartPrice +=parseInt(newProduct.newPrice);
            } 
            else{
                state.cart[existingProdIdx].quantity!+=1;


                // Update the cart price based on the new quantity
                state.cartPrice=state.cartPrice+parseInt(state.cart[existingProdIdx].newPrice);
               
               
              
               
            }

        },
        removeItem: (state, action: PayloadAction<number>) => {
            const itemIdx = state.cart.findIndex((item) => item.id === action.payload);
            if (itemIdx >= 0) {
                state.cart.splice(itemIdx, 1);
            }
            state.cartPrice=state.cartPrice-parseInt(state.cart[itemIdx].newPrice);
            
        },
        removeItemQuantity:(state,action:PayloadAction<number>)=>{
            const itemIdx=state.cart.findIndex((item)=>{
                return item.id===action.payload
            })
          
            if (itemIdx >= 0 && state.cart[itemIdx].quantity===1) {
                state.cart.splice(itemIdx, 1);
                state.cartPrice=state.cartPrice-parseInt(state.cart[itemIdx].newPrice);

            }
            else if(itemIdx >= 0 && state.cart[itemIdx].quantity!>1){
                state.cart[itemIdx].quantity!-=1;
                state.cartPrice=state.cartPrice-parseInt(state.cart[itemIdx].newPrice);

            }
            
        },
        addItemQuantity:(state,action:PayloadAction<number>)=>{
            
            const cartIndex=state.cart.findIndex((item)=>{
                return item.id===action.payload
            });
            console.log(cartIndex)
            if(cartIndex!==-1){
                state.cart[cartIndex].quantity!+=1;
                state.cartPrice=state.cartPrice+parseInt(state.cart[cartIndex].newPrice);

            }

        }

        



    }
});
export default productSlice.reducer;
export const { addItem, addData, removeItem,removeItemQuantity,addItemQuantity } = productSlice.actions;
