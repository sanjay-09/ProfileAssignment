import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./appSlice";

export const appStore=configureStore({
    reducer:{
        productSlice:productSlice
        
       
    }
})
// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof appStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof appStore.dispatch
export type AppStore = typeof appStore