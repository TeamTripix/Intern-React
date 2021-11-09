const initialStage = {
  list: [],
};
const addProductReducer = (stage = initialStage, action) => {
  switch (action.type) {
    case "add":
      const { id, data } = action.payload;
      return {
        ...stage,
        list: [
          ...stage.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "edit":
      const { editId, editData } = action.payload;
      const index = stage.list.findIndex((id) => id.id === editId);
      console.log("stage",stage)

      return {
        ...stage,
        list: [
          ...stage.list,
          {
            id: editId,
            data: stage.list[index].data=editData
          }
        ],
      };

    default:
      return stage;
  }
};

export default addProductReducer;
