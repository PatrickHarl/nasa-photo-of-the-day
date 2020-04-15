import React from 'react'


function Copyright({nasaData}) {


    if (!nasaData)
    {

        return <h3>Loading...</h3>
        

    }
    return (

    
        <div>

            <p>{`\u00a9` + nasaData.copyright}</p>
            <p>Date: {nasaData.date}</p>

        </div>


    )


}

export default Copyright