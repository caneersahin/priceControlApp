import React from "react";
import ProductListCounterCard from "/components/ProductListCounterCard.jsx";
import ProductListTable from "/components/tableComponents/ProductListTable.jsx";
import Grid from "@mui/material/Unstable_Grid2";
import AddNewProductBtn from "./NewProductBtn";
import { useFetchProductsDetailQuery } from "../store/index.jsx";
import { useFetchProductsQuery } from "../store/index.jsx";
import { useRemoveProductsDetailMutation } from "../store/index.jsx";


function Dashboard() {
  const test = useRemoveProductsDetailMutation();
  const {
    data: productsDetailData,
    isError,
    refetch,
  } = useFetchProductsDetailQuery();
  const {
    data: productListData,
    isError: productListDataIsError,
    refetch: productListDataRefetch,
  } = useFetchProductsQuery();

  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={4}>
          <ProductListCounterCard />
        </Grid>
        <Grid xs={4}></Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid xs={6}>
          <Grid
            xs={4}
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <AddNewProductBtn />
          </Grid>
          <ProductListTable
            data={productsDetailData}
            isError={isError}
            refetch={refetch}
          />
        </Grid>
        <Grid xs={6}>
          <ProductListTable
            data={productListData}
            isError={productListDataIsError}
            refetch={productListDataRefetch}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
