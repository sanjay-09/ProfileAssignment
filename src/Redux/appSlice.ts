import { ProductType } from './../product.types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const productSlice = createSlice({
    name: 'productSlice',
    initialState: {
        cart: [] as ProductType[],
        cartPrice: 0,
    },
    reducers: {
        addItem: (state, action: PayloadAction<ProductType>) => {
            const newProduct = { ...action.payload, selectedQuantity: 1 };
            const existingProdIdx = state.cart.findIndex((item) => item.id === newProduct.id);
            if (existingProdIdx === -1) {
                state.cart.push(newProduct);
                state.cartPrice += newProduct.price;
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
export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = productSlice.actions;
