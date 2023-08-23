import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import productApi from "./apis/productApi";


export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productApi.middleware);
  },
});

setupListeners(store.dispatch);
// export default store;

export {
  useFetchProductsQuery,
  useAddProductsMutation,
  useRemoveProductsMutation,
  useFetchProductsDetailQuery,
  useRemoveProductsDetailMutation
} from "./apis/productApi";
