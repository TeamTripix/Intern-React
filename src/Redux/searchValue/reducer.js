const searchValueReducer = (stage = '', action)=>{

    if(action.type === 'search'){
        return(
            action.payload
        )
    }
    else{
        return(
            stage
        )
    }
}

export default searchValueReducer