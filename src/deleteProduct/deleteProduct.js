import React from "react";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { deleteProductAction } from "../Redux/addProduct/action";

const DeleteProduct = (props) => {
  const dispatch = useDispatch();

  const handleDelete = (pId) => {
    dispatch(deleteProductAction(pId));
  };
  return (
    <>
      <div>
        <Button
          variant="contained"
          color="error"
          style={{ marginBottom: "1rem" }}
          onClick={() => handleDelete(props.pId)}
        >
          Delete
        </Button>
      </div>
    </>
  );
};

export default DeleteProduct;
