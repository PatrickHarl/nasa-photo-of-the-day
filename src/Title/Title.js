import React from 'react'


function Title({nasaData}) {

    if(!nasaData)
    {

        return <h3>Loading...</h3>

    }

    return (

        <div className="title">
            <h1>{nasaData.title}</h1>
        </div>

    )



}

export default Title