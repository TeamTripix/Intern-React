import * as React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import addProductAction from "../Redux/addProduct/action";
import { useDispatch } from "react-redux";
import isAlpha from "validator/lib/isAlpha";
import isEmpty from "validator/lib/isEmpty";

export default function AddProductForm() {
  const [shopName, setShopName] = React.useState("");
  const [area, setArea] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [openDate, setOpenDate] = React.useState("");
  const [closeDate, setCloseDate] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [isFormError, setIsFormError] = React.useState(false);
  const [isShopNameError, setIsShopNameError] = React.useState(false);
  const [shopNameLable, setShopNameLable] = React.useState("Name");
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const areaDropDown = [
    {
      value: "Thane",
      label: "Thane",
    },
    {
      value: "Pune",
      label: "Pune",
    },
    {
      value: "Mumbai Suburban",
      label: "Mumbai Suburban",
    },
    {
      value: "Nashik",
      label: "Nashik",
    },
    {
      value: "Nagpur",
      label: "Nagpur",
    },
    {
      value: "Ahmednagar",
      label: "Ahmednagar",
    },
    {
      value: "Solapur",
      label: "Solapur",
    },
  ];

  const categoryDropDown = [
    {
      value: "Grocery",
      label: "Grocery",
    },
    {
      value: "Butcher",
      label: "Butcher",
    },
    {
      value: "Baker",
      label: "Baker",
    },
    {
      value: "Chemist",
      label: "Chemist",
    },
    {
      value: "Stationery shop",
      label: "Stationery shop",
    },
  ];

  const handleClose = () => {
    setOpen(false);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAreaChange = (event) => {
    setArea(event.target.value);
  };

  const handleAddButton = () => {
    const shopData = {
      shopName: shopName,
      area: area,
      category: category,
      openDate: openDate,
      closeDate: closeDate,
    };
    dispatch(addProductAction(shopData));
    setShopName("")
    setArea("")
    setCategory("")
    setOpenDate("")
    setCloseDate("")
    setIsShopNameError(false)
    setIsFormError(false)
    setShopNameLable('Name')
    setOpen(false);
  };

  const handleFormError = (data) => {
    if(isAlpha(data)){
      setIsShopNameError(false)
      setShopNameLable('Name')
      setIsFormError(false)
    }else if(isEmpty(data)){
      setIsShopNameError(false)
      setShopNameLable('Name')
      setIsFormError(false)
    }else{
      setIsShopNameError(true)
      setShopNameLable('Enter only alphabets')
      setIsFormError(true)
    }

  };

  const handleShopName = (value) =>{
    setShopName(value)
    handleFormError(value)
  }

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        style={{ marginBottom: "1rem" }}
        onClick={handleClickOpen}
      >
        Add Shop
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Shop</DialogTitle>
        <DialogContent>
          <form>
            <TextField
            error={isShopNameError}
              margin="dense"
              id="Name"
              label={shopNameLable}
              type="text"
              fullWidth
              variant="outlined"
              onChange={(e) => handleShopName(e.target.value)}
            />

            <TextField
              id="area"
              fullWidth
              margin="dense"
              color="primary"
              select
              variant="outlined"
              label="Area"
              value={area}
              onChange={handleAreaChange}
            >
              {areaDropDown.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="category"
              fullWidth
              margin="dense"
              color="primary"
              select
              variant="outlined"
              label="Catergory"
              value={category}
              onChange={handleCategoryChange}
            >
              {categoryDropDown.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              InputLabelProps={{ shrink: true }}
              helperText=""
              margin="dense"
              id="openDate"
              label="Opening Date"
              type="date"
              fullWidth
              variant="outlined"
              onChange={(e) => setOpenDate(e.target.value)}
            />
            <TextField
              inputProps={{
                min: openDate,
              }}
              margin="dense"
              InputLabelProps={{ shrink: true }}
              id="closeDate"
              label="Closing Date"
              type="date"
              fullWidth
              variant="outlined"
              onChange={(e) => setCloseDate(e.target.value)}
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
            disabled = {isFormError}
            onClick={handleAddButton}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
