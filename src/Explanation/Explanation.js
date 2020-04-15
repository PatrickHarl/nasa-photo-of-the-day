import React from 'react'
import "./Explanation.css"



function Explanation({nasaData}) {


    if (!nasaData)
    {

        return <h3>Loading...</h3>

    }
    return (


        <div className='explanation-container'>
            <p className="explanation">{nasaData.explanation}</p>
        </div>


    )



}

export default Explanation