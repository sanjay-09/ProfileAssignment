import data from '../db/db';
import { newProductType, ProductType } from './../product.types';
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
            const newProduct = { ...action.payload };
            const existingProdIdx = state.cart.findIndex((item) => item.id === newProduct.id);
            if (existingProdIdx === -1) {
                state.cart.push(newProduct);
                state.cartPrice +=parseInt(newProduct.newPrice);
            } 

        },
        removeItem: (state, action: PayloadAction<number>) => {
            const itemIdx = state.cart.findIndex((item) => item.id === action.payload);
            if (itemIdx >= 0) {
                state.cart.splice(itemIdx, 1);
            }
        },
        increaseQuantity: (state, action: PayloadAction<number>) => {

            const itemIdx = state.cart.findIndex((item) => item.id === action.payload);
            if (itemIdx >= 0) {
                state.cart[itemIdx].selectedQuantity += 1;
                state.cartPrice += state.cart[itemIdx].price;
            }
        },
        decreaseQuantity: (state, action: PayloadAction<number>) => {

            const itemIdx = state.cart.findIndex((item) => item?.id === action.payload);
            if (itemIdx >= 0) {
                state.cart[itemIdx].selectedQuantity -= 1;
                state.cartPrice -= state.cart[itemIdx].price;

                if (state.cart[itemIdx].selectedQuantity === 0) {
                    state.cart.splice(itemIdx, 1);
                }
            }
        }



    }
});
export default productSlice.reducer;
export const { addItem, addData, removeItem, increaseQuantity, decreaseQuantity } = productSlice.actions;
