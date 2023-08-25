import React from "react";
import { useState } from "react";
import ProductListCounterCard from "/components/ProductListCounterCard.jsx";
import ProductListTable from "/components/tableComponents/ProductListTable.jsx";
import Grid from "@mui/material/Unstable_Grid2";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddNewProductBtn from "./NewProductBtn";
import {
  useFetchProductsDetailQuery,
  useFetchProductsByIdQuery,
  useFetchProductsQuery,
  useRemoveProductsDetailMutation,
} from "../store/index.jsx";

function Dashboard() {
  const [selectedProductId, setSelectedProductId] = useState("all");
  const {
    data: productsDetailData,
    isError,
    refetch,
  } = useFetchProductsDetailQuery();
  const {
    data: productsGetByIdData,
    isError: isErrorById,
    refetch: refetchById,
  } = useFetchProductsByIdQuery(selectedProductId);
  const {
    data: productListData,
    isError: productListDataIsError,
    refetch: productListDataRefetch,
  } = useFetchProductsQuery();

  const handleChange = (event) => {
    const newSelectedProductId = event.target.value;
    setSelectedProductId(newSelectedProductId);
    refetchById(newSelectedProductId); // Yeni ürün ID'si ile refetch yapılmalı.
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={3}>
          <ProductListCounterCard />
        </Grid>
        <Grid xs={4}></Grid>
        <Grid
          xs={5}
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            marginTop: "1rem",
          }}
        ></Grid>
      </Grid>
      <hr />
      <br />
      <Grid container spacing={2}>
        <Grid xs={6}>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <AddNewProductBtn />
          </div>
          <ProductListTable
            data={productListData}
            isError={productListDataIsError}
            refetch={productListDataRefetch}
          />
        </Grid>
        <Grid xs={6}>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label">Ürün</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="all">
                  <em>Hepsi</em>
                </MenuItem>
                {productListData?.map((item, index) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}{" "}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <ProductListTable
            data={productsGetByIdData}
            isError={isError}
            refetch={refetch}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
