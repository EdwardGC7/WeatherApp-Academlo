import { useEffect, useState } from 'react'
import './App.css'
import CardWeather from './componets/CardWeather';

function App() {
  
  const [coords, setCoords] = useState();
 
  useEffect(()=>{
    const success = pos =>{
      const latlon = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(latlon);
    }
    navigator.geolocation.getCurrentPosition(success);
  },[]);

  return (
    <>
      <CardWeather lon={coords?.lon} lat={coords?.lat}/>
    </>
  )
}

export default App
