import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useSelector, useDispatch } from "react-redux";
import { editProductAction } from "../Redux/addProduct/action";

const EditProduct = (props) => {
  const [open, setOpen] = React.useState(false)
  const [shopName, setShopName] = React.useState("");
  const [area, setArea] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [openingDate, setOpeningDate] = React.useState("");
  const [closingDate, setClosingDate] = React.useState("");
  const dispatch = useDispatch()
  const editData = useSelector((state)=>{
      return state
  })
  const handleClickOpen = () => {
    setOpen(true);
     editData.addProduct.list.map((item)=>{
         if(item.id === props.pId){
            setShopName(item.data.shopName)
            setArea(item.data.area)
            setCategory(item.data.category)
            setClosingDate(item.data.openingDate)
            setOpeningDate(item.data.closingDate)
            return null
         }
         return null
     })
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = (pId) => {
    const shopData = {
        shopName: shopName,
        category: category,
        area: area,
        openingDate: openingDate,
        closingDate: closingDate
      }

      console.log(shopData)
      dispatch(editProductAction(shopData, pId))
      setOpen(false);
  };
  return (
    <>
      <div>
        <Button
          variant="contained"
          color="primary"
          style={{ marginBottom: "1rem" }}
          onClick={handleClickOpen}
        >
          edit
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit Product</DialogTitle>
          <DialogContent>
            <form>
              <TextField
                margin="dense"
                id="Product Name"
                label="Product Name"
                type="text"
                fullWidth
                variant="outlined"
                value={shopName}
                onChange={(e) => setShopName(e.target.value)}
              />
              <TextField
                margin="dense"
                id="area"
                label="Area"
                type="text"
                fullWidth
                variant="outlined"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
              <TextField
                margin="dense"
                id="category"
                label="Category"
                type="text"
                fullWidth
                variant="outlined"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <TextField
              InputLabelProps={{ shrink: true }}
                margin="dense"
                id="openingDate"
                label="Opening Date"
                type="date"
                fullWidth
                variant="outlined"
                // value={openingDate}
                onChange={(e) => setOpeningDate(e.target.value)}
              />
              <TextField
              InputLabelProps={{ shrink: true }}
                margin="dense"
                id="closingDate"
                label="Closing Date"
                type="date"
                fullWidth
                variant="outlined"
                // value={closingDate}
                onChange={(e) => setClosingDate(e.target.value)}
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="info" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleEdit(props.pId)}
            >
              Edit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default EditProduct;
