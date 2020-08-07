import React from 'react';
import {Fecha, Temperatura} from './HeaderStyles';

const Header = () => {
    const months = ["January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let current_datetime = new Date()
    let formatted_date = months[current_datetime.getMonth()] + " " + current_datetime.getDate() + ", " +  current_datetime.getFullYear()
    return ( 
        <div>
            <Fecha>{formatted_date}</Fecha>
            <Temperatura>23°C</Temperatura>
        </div>
     );
}
 
export default Header;