import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import searchValueAction from "../Redux/searchValue/action";
import { useDispatch } from "react-redux";

// Using Inline Styling
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

// Exporting Default Navbar to the App.js File
export default function Navbar(props) {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar
          variant="dense"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              style={{ marginLeft: "1rem" }}
              color="inherit"
            >
              {props.username}
            </Typography>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <TextField
              id="standard-search"
              label="Search field"
              type="search"
              variant="filled"
              size="small"
              style={{
                marginRight: "1rem",
                color: "white",
                backgroundColor: "white",
                margin: "0.5rem",
                borderRadius: "5px",
              }}
              onChange={(e) => dispatch(searchValueAction(e.target.value))}
            />

            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                localStorage.removeItem("persist:root");
                window.location.reload();
              }}
            >
              Clear data
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
