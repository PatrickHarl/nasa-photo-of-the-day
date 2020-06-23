import React from 'react'
import styled from '@emotion/styled'

const CopyrightContainer = styled.div`


    font-style:italic;


`
const CopyrightPara = styled.p`


    text-decoration:underline;


`

function Copyright({nasaData}) {


    if (!nasaData)
    {

        return <h3>Loading...</h3>
        

    }
    return (

    
        <CopyrightContainer>

            <p>{`\u00a9` + nasaData.copyright}</p>
            <CopyrightPara>Date: {nasaData.date}</CopyrightPara>

        </CopyrightContainer>


    )


}

export default Copyright