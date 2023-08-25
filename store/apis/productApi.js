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
          var tableColumnName = ["Product ID", "Product Name", "Link", "Event"]
          var tableColumnData = ["id", "name", "link"]
          response.tableColumnName = tableColumnName
          response.tableColumnData = tableColumnData
          response.iconType = { "iconType": "DELETE", "color": "error" }
          return response;
        },
      }),
      fetchProductsById: builder.query({
        query: (productId) => {
          if (productId === 'all') {
            return {
              url: '/productDetail',
              method: 'GET',
            };
          } else {
            return {
              url: '/productDetail',
              method: 'GET',
              params: {
                productId: productId,
              },
            };
          }
        },
        transformResponse: (response) => {
          var tableColumnName = ["Product ID", "Product Name", "Price", "Product Link", "Event"]
          var tableColumnData = ["productId", "productName", "productPrices", "productLink"]
          response.tableColumnName = tableColumnName
          response.tableColumnData = tableColumnData
          response.iconType = { "iconType": "LINK", "color": "primary" }
          return response;
        },
      }),
      addProducts: builder.mutation({
        query: (newProduct) => {
          console.log(newProduct)
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
          response.iconType = { "iconType": "LINK", "color": "primary" }
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

export const { useFetchProductsQuery, useFetchProductsByIdQuery, useAddProductsMutation, useRemoveProductsMutation, useFetchProductsDetailQuery, useRemoveProductsDetailMutation } = productApi;

export default productApi;