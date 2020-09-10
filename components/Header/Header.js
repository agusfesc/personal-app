import React, {useEffect, useState} from 'react';
import {DateText, Temperature} from './HeaderStyles';

const Header = ({data}) => {
    const [ weather, setWeather ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ temperature, setTemperature] = useState();
    
    useEffect(() => {
        fetch('http://api.openweathermap.org/data/2.5/weather?id=3836277&appid='+ process.env.NEXT_PUBLIC_WEATHER_KEY )
        .then(res => res.json())
        .then(weather => {
        setWeather(weather)
        setIsLoading(false)
        setTemperature(Math.round(weather.main.temp - 273.15));
        })
        }, [])
        
    const months = ["January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let current_datetime = new Date()
    let formatted_date = months[current_datetime.getMonth()] + " " + current_datetime.getDate() + ", " +  current_datetime.getFullYear()
    
    while(isLoading){
        return null;
    }
    
    return ( 
        <div>
            <DateText> {formatted_date} </DateText>
            <Temperature> {temperature} °C</Temperature>
        </div>
     );
    
}


export default Header;