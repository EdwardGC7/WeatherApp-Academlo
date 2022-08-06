import axios from 'axios';
import React, { useEffect, useState } from 'react'
import LoadingScreen from './LoadingScreen';

const CardWeather = ({lon, lat}) => {
  

  const [weather, setWeather] = useState();
  const [temperture, setTemperture] = useState();
  const [isCelsius, setIsCelsius] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (lat) {
      const APIKey = '518aeedc5a379c23301533d3c2feb3b5';
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`;

      axios.get(URL)
      .then(res => {
        setWeather(res.data);
        const temp = {
          celsius: `${Math.round(res.data.main.temp -273.15)} °C`,
          farenheit: `${Math.round((res.data.main.temp -273.15) * 9 / 5 + 32)} °F`
        };
        setTemperture(temp);
        setIsLoading(false);
      })
      .catch(err => console.log(err))
    }

  }, [lat, lon])

  const handleClick = ()=> setIsCelsius(!isCelsius);

  if (isLoading) {

    return <LoadingScreen />
    
  }else {

  return (
    <div className={`weather-screen img${weather?.weather[0].icon}`}>
      <div className='weather-container'>
      <div className='weather-card-glass'>
      <h1>{`${weather?.name}, ${weather?.sys.country}`}</h1>
      <h3>&#34;{weather?.weather[0].description}&#34;</h3>
      <div>
        <div className='temperture'>
          <img src={weather && `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
          <div className='temperture-deg'>
          <h2>{isCelsius ? temperture?.celsius : temperture?.farenheit}</h2>
          <button onClick={handleClick}>{isCelsius ? 'Change to °F' : 'Change to °C'}</button>
          </div>
        </div>
        <div>
          <ul>
            <li><span>Wind Speed </span>{weather?.wind.speed} m/s</li>
            <li><span>Clouds</span> {weather?.clouds.all}%</li>
            <li><span>Pressure</span> {weather?.main.pressure}hPa</li>
          </ul>
        </div>
      </div>
    </div>
      </div>
    </div>
  )
  }
}

export default CardWeather
