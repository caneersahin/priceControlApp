import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import productApi from "./apis/productApi";
import productsSliceReducer from "../src/slices/productSlice";

const rootReducer = combineReducers({
  [productApi.reducerPath]: productApi.reducer,
  product: productsSliceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productApi.middleware);
  },
});

// export const store = configureStore({
//   reducer: {
//     [productApi.reducerPath]: productApi.reducer,
//     product: productsSliceReducer,
//   },

//   middleware: (getDefaultMiddleware) => {
//     return getDefaultMiddleware().concat(productApi.middleware);
//   },
// });

setupListeners(store.dispatch);

// export default store;

export {
  useFetchProductsQuery,
  useFetchProductsByIdQuery,
  useAddProductsMutation,
  useRemoveProductsMutation,
  useFetchProductsDetailQuery,
  useRemoveProductsDetailMutation,
} from "./apis/productApi";
