import React from 'react'
import RecipeReviewCard from './product'

function Product(props) {
    return (
        <>
            <RecipeReviewCard item={props.item}/>
            </>
    )
}

export default Product