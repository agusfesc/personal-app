import MainLayout from '../components/MainLayout/MainLayout';
import React, {useEffect, useState} from 'react';


const Weather = () => {
  const [ weather, setWeather ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  
  useEffect(() => {
      fetch('http://api.openweathermap.org/data/2.5/forecast?id=3836277&appid='+ process.env.NEXT_PUBLIC_WEATHER_KEY )
      .then(res => res.json())
      .then(weather => {
      setWeather(weather.list)
      setIsLoading(false)
      })
      }, [])

      while(isLoading){
        return null;
      }
      console.log(weather);
  return ( 
    <MainLayout>
      {weather.map(time =>{
              return(
              <h1> {time.dt_txt} </h1>
              )
          })}
    </MainLayout>
   );
}
 
export default Weather;