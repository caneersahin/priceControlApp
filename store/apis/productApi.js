import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const productApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints(builder) {
    return {
      fetchProducts: builder.query({
        query: () => {
          return {
            url: '/product',
            method: 'GET'
          };
        },
        transformResponse: (response) => {
          var tableColumnName = ["Product ID", "Product Name", "Price", "Event"]
          var tableColumnData = ["id", "name", "price"]
          response.tableColumnName = tableColumnName
          response.tableColumnData = tableColumnData

          return response;
        },
      }),
      addProducts: builder.mutation({
        query: (newProduct) => {
          return {
            url: '/product',
            method: 'POST',
            body: newProduct
          };
        },
      }),
      removeProducts: builder.mutation({
        query: (product) => {
          return {
            url: `/product/${product.id}`,
            method: 'DELETE',
            body: {
              id: product.id
            }
          };
        },
      }),
      fetchProductsDetail: builder.query({
        query: () => {
          return {
            url: '/productDetail',
            method: 'GET'
          };
        },
        transformResponse: (response) => {
          var tableColumnName = ["Product ID", "Product Name", "Price", "Product Link", "Event"]
          var tableColumnData = ["productId", "productName", "productPrices", "productLink"]
          response.tableColumnName = tableColumnName
          response.tableColumnData = tableColumnData
          return response;
        },
      }),
      removeProductsDetail: builder.mutation({
        query: (product) => {
          return {
            url: `/productDetail/${product.id}`,
            method: 'DELETE',
            body: {
              id: product.id
            }
          };
        },
      }),
    };
  },
})

export const { useFetchProductsQuery, useAddProductsMutation, useRemoveProductsMutation, useFetchProductsDetailQuery, useRemoveProductsDetailMutation } = productApi;

export default productApi;