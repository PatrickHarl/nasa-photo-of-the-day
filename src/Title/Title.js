import React from 'react'
import styled from '@emotion/styled'

const TitleContainer = styled.div`

    border:1px solid lightskyblue;
    margin-top:1%;
    background-color:lightskyblue;
    transition: all 0.5s ease-in-out;

    &:hover{

        
        background-color:${props => props.hovercolor ? props.hovercolor : 'teal'};

    }


`
const TitleContainerHeader = styled.h1`

    
    height:100%;
    font-family: 'Baloo Bhaina 2', cursive;

`

function Title({nasaData}) {

    if(!nasaData)
    {

        return <h3>Loading...</h3>

    }

    return (

        <TitleContainer hovercolor = 'lightsalmon'>
            <TitleContainerHeader>{nasaData.title}</TitleContainerHeader>
        </TitleContainer>

    )



}

export default Title