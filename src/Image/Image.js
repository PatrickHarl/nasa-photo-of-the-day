import React from 'react'
import "./Image.css"

 function Image({nasaData}) {

    if (!nasaData)
    {

        return <h3>Loading...</h3>

    }

    return(
        <div className="container">
            <div className="img-container">
                <img src={nasaData.hdurl}></img>
            </div>
        </div>
    )



}

export default Image