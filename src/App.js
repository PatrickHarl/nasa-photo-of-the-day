import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Image from './Image/Image'
import Title from './Title/Title'
import Explanation from './Explanation/Explanation'
import Copyright from './Copyright/Copyright'
import styled from '@emotion/styled'


const AppContainer = styled.div`


  text-align: center;

`

const LabelContainer = styled.div`


  padding-bottom:2%;


`


function App() {


  
 
  const [nasaData, setNasaData] = useState(null)
  const [currentDate, setCurrentDate] = useState('date=2020-04-15')

  const url = 'https://api.nasa.gov/planetary/apod?api_key=dMEE8YmJuP8gwBLTsQmPSgoHGhrSyKUGw7hHjmgT&' + currentDate

  useEffect(() => {

    axios.get(url)
      .then(res=> {
      
        setNasaData(res.data)
  
      
      })
      .catch(err=> {

        console.log('There was an error')

      })
    
  


  }, [currentDate])



  return (
    <AppContainer>
       <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      
      <label for="dates">Choose a date: </label>
      <LabelContainer>
        <select onChange= {(event) => {setCurrentDate(event.target.value)}} id="dates">
          <option value="date=2020-04-11">April 11, 2020</option>
          <option value="date=2020-04-12">April 12, 2020</option>
          <option value="date=2020-04-13">April 13, 2020</option>
          <option value="date=2020-04-14">April 14, 2020</option>
          <option selected="selected" value="date=2020-04-15">April 15, 2020</option>
          <option value="date=2020-04-16">April 16, 2020</option>
        </select>  
      </LabelContainer>
      <Image nasaData={nasaData}/>
      <Title nasaData={nasaData}/>
      <Explanation nasaData={nasaData} />
      <Copyright nasaData={nasaData} />
        
      
    </AppContainer>
  );
}

export default App;
