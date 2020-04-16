import React from 'react'
import "./Explanation.css"
import styled from '@emotion/styled'


const ExplanationContainer = styled.div`


    display:flex;
    justify-content: center;
    text-align: left;



`
const ExplanationPara = styled.p`


    width:55%;


`


function Explanation({nasaData}) {


    if (!nasaData)
    {

        return <h3>Loading...</h3>

    }
    return (


        <ExplanationContainer>
            <ExplanationPara>{nasaData.explanation}</ExplanationPara>
        </ExplanationContainer>


    )



}

export default Explanation