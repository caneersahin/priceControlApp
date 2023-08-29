import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useAddProductsMutation } from "../store";
import { useFetchProductsQuery } from "../store/";
import { FiPlus } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

function NewProductBtn() {
  const [productName, setProductName] = useState("");
  const [productLink, setProductLink] = useState("");

  const [addProduct, { isLoading, refetch }] = useAddProductsMutation();
  const { refetch: refetchProducts } = useFetchProductsQuery();

  const handleAddProduct = () => {
    const date = new Date(); // Şu anki tarih ve saat
    const options = { day: "numeric", month: "numeric", year: "numeric" };
    const formatter = new Intl.DateTimeFormat("tr-TR", options);
    const formattedDate = formatter.format(date);

    addProduct({ name: productName, link: productLink, date: formattedDate })
      .then(() => {
        toast.success("Product added successfully"); // Toast mesajını burada gösteriyoruz
        refetchProducts();
        handleClose();
        setProductName("");
        setProductLink("");
      })
      .catch((error) => {
        toast.error("Error adding product"); // Toast mesajını burada gösteriyoruz
      });
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        startIcon={<FiPlus />}
      >
        Add New Product
      </Button>
      <ToastContainer />
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Yeni Kayıt Ekle
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <TextField
            id="outlined-textarea"
            label="Ürün Adı"
            value={productName}
            placeholder="Ürün Adı"
            multiline
            style={{
              width: "100%",
              marginTop: "2%",
              marginBottom: "5%",
            }}
            onChange={(e) => setProductName(e.target.value)}
          />
          <TextField
            id="outlined-textarea"
            label="Ürün Takip Linki"
            value={productLink}
            placeholder="Ürün Takip Linki"
            multiline
            style={{
              width: "100%",
              marginTop: "2%",
            }}
            onChange={(e) => setProductLink(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleAddProduct} disabled={isLoading}>
            Kaydet
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

export default NewProductBtn;
