import * as React from "react";
import { useParams } from "react-router-dom";
import { LineChart } from "@mui/x-charts/LineChart";
import { useFetchProductsByIdQuery } from "../store/index.jsx";

function Chart() {
  const { id } = useParams();
  const {
    data: productsGetByIdData,
    isLoading,
    isError: isErrorById,
    refetch: refetchById,
  } = useFetchProductsByIdQuery(id);
  var priceList = [0];
  // const dates = ["2020", "2021", "2022", "2023","2023"];

  {
    productsGetByIdData?.map((item) => priceList.push(item.productPrices));
  }
  return (
    <>
      {!isLoading ? (
        <LineChart
          // xAxis={[
          //   {
          //     valueFormatter: (v) => v.toString(),
          //     min: 2017,
          //     max: 2023,
          //   },
          // ]}
          series={[
            {
              data: priceList,
            },
          ]}
          width={500}
          height={350}
        />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default Chart;

