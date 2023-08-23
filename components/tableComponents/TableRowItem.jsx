import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { FiTrash2 } from "react-icons/fi";
import { useRemoveProductsMutation } from "../../store/index.jsx";

function TableRowItem({ data, refetch, tableColumnDatas }) {

  const [removeProduct] = useRemoveProductsMutation();
  const handleDelete = (productId) => {
    removeProduct({ id: productId })
      .then((response) => {
        refetch();
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  return (
    <TableRow key={data.id}>
      {tableColumnDatas.map((item) => (
        <TableCell key={data[item]} align="center">
          {data[item]}
        </TableCell>
      ))}

      <TableCell align="center" style={{ color: "error" }}>
        <Button onClick={() => handleDelete(data.id)} color="error">
          {<FiTrash2 size={22} color="error"></FiTrash2>}
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default TableRowItem;
