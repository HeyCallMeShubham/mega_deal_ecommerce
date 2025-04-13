
import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import FilterProducts from "../FilterProducts";
 


const listenerMiddleware = createListenerMiddleware();


export const store = configureStore({

    reducer: {

        filterProducts: FilterProducts

    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware)


})

 