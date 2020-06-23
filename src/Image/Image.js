import React from 'react'
import "./Image.css"

/*STRETCH GOAL USING EMOTION INSTEAD OF STYLED-COMPONENTS */
import styled from '@emotion/styled'

const ImageContainer = styled.div`

    display:flex;
    justify-content: center;

`
const InnerImageContainer = styled.div`


    width:55%;
    height:100%;

    img {

        border-radius:10px;
        width:100%;


    }


`

 function Image({nasaData}) {

    if (!nasaData)
    {

        return <h3>Loading...</h3>

    }

    return(
        <ImageContainer>
            <InnerImageContainer>
                <img src={nasaData.hdurl}></img>
            </InnerImageContainer>
        </ImageContainer>
    )



}

export default Image