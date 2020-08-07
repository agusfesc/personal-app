import React from 'react';
import {Title, Image, MainButton, Square } from './ButtonStyles';

const Button = ({color, title, source}) => {
  return ( 
    <MainButton>
      <Square color={color}>
        <Image src={source} alt={title} />
      </Square>  
      <Title>{title}</Title>
    </MainButton>
   );
}
 
export default Button;