import React from 'react'

const userOutput = (props) => {
    return(
        <div>
            <p onClick = {props.click}>{props.username} is my username</p>
            <p> And i am navjot</p>
        </div>
    )
}


export default userOutput