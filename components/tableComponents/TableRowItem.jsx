import { Link } from 'react-router-dom';
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
        debugger
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
      <TableCell align="center" >
      <Button color={iconType.color}>
          {iconType.iconType === "DELETE" ? (
            <FiTrash2 size={22} onClick={() => handleDelete(data.id)} />
          ) : iconType.iconType === "LINK" ? (
           
            <Link to={`/productDetail/${data.id}`}>
              <FiExternalLink size={22} />
            </Link>
           
            // <FiExternalLink size={22} onClick={() => handleLink(data.id)} />
          ) : (
            // Başka bir ikon veya davranış eklemek isterseniz buraya ekleyebilirsiniz
            null
          )}
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default TableRowItem;
