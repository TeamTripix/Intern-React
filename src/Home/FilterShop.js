import * as React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const currencies = [
  {
    value: "area",
    label: "Area",
  },
  {
    value: "category",
    label: "Category",
  },
  //   {
  //     value: 'BTC',
  //     label: '฿',
  //   }
];

export default function FilterShop() {
  const [filter, setFilter] = React.useState("");

  const handleChange = (event) => {
    setFilter(event.target.value);
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
      <div>
        <TextField
          id="outlined-select-currency"
          color="primary"
          select
          variant="outlined"
          label="Set Filter"
          value={filter}
          onChange={handleChange}
          style={{
            marginBottom: "1rem",
            color: "white",
            backgroundColor: "white",
            borderRadius: "5px",
            padding: 0,
          }}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
