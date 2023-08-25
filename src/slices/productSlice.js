import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productItems: [],
  length: 0
};


const productsSliceReducer = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProduct: (state) => {
      debugger
      state.productItems = ["caner"]
    }
  }
});

console.log(initialState)

export const { setProduct } = productsSliceReducer.actions
export default productsSliceReducer.reducer;
