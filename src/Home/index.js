import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Navbar from "./Navbar";
import Product from "../Product";
import AddProducts from "../addProducts";
import { useSelector } from "react-redux";
import FilterShop from "./FilterShop";

function Index(props) {
  const reduxData = useSelector((state) => {
    return state.addProduct.list;
  });

  const searchData = useSelector((state) => {
    return state.searchValue;
  });

  return (
    <>
      <Navbar username={props.username} />
      <Container style={{ marginTop: "5rem" }}>

        <AddProducts />
        <FilterShop />
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {reduxData.length === 0
            ? "Nothing to show click on add shop button to add new shops"
            : reduxData
                .filter((item) => {
                  if (searchData === "") {
                    return item;
                  } else if (item.data.shopName.toLowerCase().includes(searchData.toLowerCase())) {
                    return item;
                  } else{
                    return ""
                  }
                })

                .map((item) => {
                  return (
                    <Grid item xs={12} sm={6} md={3}>
                      <Product item={item} />
                    </Grid>
                  );
                })}
        </Grid>
      </Container>
    </>
  );
}

export default Index;
