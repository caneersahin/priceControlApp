import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

function TableHeader({ tableColumnNames }) {
  return (
    <>
        <TableRow>
      {tableColumnNames?.map((name, index) => (
          <TableCell align="center" key={index}>
            {name}
          </TableCell>
      ))}
        </TableRow>
    </>
  );
}

export default TableHeader;
