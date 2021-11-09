const searchValueAction = (searchValue) => {
    return{
        type : 'search',
        payload : searchValue
    }
}
export default searchValueAction