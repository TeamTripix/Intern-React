import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import EditProduct from "../editProduct";
import DeleteProduct from "../deleteProduct";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
export default function RecipeReviewCard(props) {
  const { shopName, area, category, openDate, closeDate } = props.item.data;
  const pId = props.item.id;

  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardMedia
        component="img"
        height="194"
        image={`https://source.unsplash.com/1600x900/?${shopName}`}
        alt="Paella dish"
      /> */}
      <CardContent>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* {shopName.length >= 12 ? <h3><Tooltip title={shopName} arrow>
    </Tooltip></h3> : <h3>{shopName}</h3>} */}
          {shopName.length >= 15 ? (
            <Tooltip title={shopName}><h3>{shopName.slice(0,10)}...</h3></Tooltip>
          ) : (
            <h3>{shopName}</h3>
          )}

          <p style={{ alignSelf: "center" }}>{area}</p>
        </div>
        <Typography variant="body2" color="text.secondary">
          {category}
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "0.5rem",
            marginBottom: "1rem",
          }}
        >
          <div>Opening Date : {openDate}</div>

          <div>Closing Date : {closeDate}</div>
        </div>
        <div style={{display:'flex',justifyContent:'space-between', alignItems:'center'}}>

        <EditProduct pId={pId} />
        <DeleteProduct pId={pId} />
        </div>
      </CardContent>
    </Card>
  );
}
