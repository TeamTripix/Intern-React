import React from 'react'
import { useHistory } from 'react-router'

const RestrictedRoutes = (props) => {
    const history = useHistory()
    const Component = props.component
    const data = localStorage.getItem("login")
    const getItem = JSON.parse(data)


    if(getItem){
        history.push('/home')
        return(
            <Component username={getItem.username}/>
            )
        }
        else{
            return(
                <>
                {history.push('/')}
                </>
                )
        }
}

export default RestrictedRoutes