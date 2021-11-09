const addProductAction = (productData) => {
    return{
        type : 'add',
        payload : {
            id: new Date().getTime().toString(),
            data:productData
        }
    }
}

export const editProductAction = (editProductData, id) => {

    return{
        type : 'edit',
        payload : {
            editId: id,
            editData: editProductData
        }
    }
}

export default addProductAction