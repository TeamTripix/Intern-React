import * as React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const area = [
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

export default function FilterShop() {
  const [filterArea, setFilterArea] = React.useState("");
  const [filterCategory, setFilterCategory] = React.useState("");

  const handleChangeArea = (event) => {
    setFilterArea(event.target.value);
  };
  
  const handleChangeCategory = (event) => {
    setFilterCategory(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{display:'flex', alignItems:'start'}}>
      <div style={{marginRight:'1rem'}}>
        <TextField
          id="outlined-select-currency"
          color="primary"
          select
          variant="outlined"
          label="Set Filter"
          value={filterArea}
          onChange={handleChangeArea}
          style={{
            marginBottom: "1rem",
            color: "white",
            backgroundColor: "white",
            borderRadius: "5px",
            padding: 0,
          }}
        >
          {area.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          id="outlined-select-currency"
          color="primary"
          select
          variant="outlined"
          label="Set Filter"
          value={filterCategory}
          onChange={handleChangeCategory}
          style={{
            marginBottom: "1rem",
            color: "white",
            backgroundColor: "white",
            borderRadius: "5px",
            padding: 0,
          }}
        >
          {categoryDropDown.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      </div>
    </Box>
  );
}
