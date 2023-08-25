import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { FiTrash2, FiExternalLink } from "react-icons/fi";
import { useRemoveProductsMutation } from "../../store/index.jsx";

function TableRowItem({ tableProps }) {
  const { data, refetch, tableColumnDatas, iconType } = tableProps;
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
        <Button onClick={() => handleDelete(data.id)} color={iconType.color}>
          {iconType.iconType === "DELETE" && <FiTrash2 size={22} />}
          {iconType.iconType === "LINK" && <FiExternalLink size={22} />}
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default TableRowItem;
