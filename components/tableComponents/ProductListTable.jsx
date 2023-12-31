import React from "react";
import TableHeader from "/components/tableComponents/TableHeader.jsx";
import TableRowItem from "/components/tableComponents/TableRowItem.jsx";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";

function ProductListTable({ data, isError, refetch }) {
  const tableColumnNames = data?.tableColumnName;
  const tableColumnDatas = data?.tableColumnData;
  const tableIconType = data?.iconType;

  let content;
  if (!data) {
    return <div>Loading...</div>;
  }

  content = (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableHeader tableColumnNames={tableColumnNames} />
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRowItem
              key={item.id}
              tableProps={{
                data: item,
                refetch: refetch,
                tableColumnDatas,
                iconType: tableIconType,
              }}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
  if (isError) {
    content = <div>error laaa</div>;
  }
  return <div>{content}</div>;
}

export default ProductListTable;
