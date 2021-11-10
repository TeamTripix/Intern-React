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

export const deleteProductAction = ( id) => {

    return{
        type : 'delete',
        payload : {
            deleteId: id,
        }
    }
}

export default addProductAction 