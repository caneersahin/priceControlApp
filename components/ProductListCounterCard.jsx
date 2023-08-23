import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useFetchProductsQuery } from "../store/index.jsx";

function OutlinedCard() {
  const { data } = useFetchProductsQuery();
  const productCount = data ? data.length : 0;

  const card = (
    <div>
      <CardContent style={{ backgroundColor: "rgb(209, 233, 252)" }}>
        <Typography variant="h5" style={{ marginTop: "15px" }}>
          Takip Edilen Ürün Sayısı : {productCount}
        </Typography>
      </CardContent>
    </div>
  );

  return (
    <Box>
      <Card>{card}</Card>
    </Box>
  );
}

export default OutlinedCard;
