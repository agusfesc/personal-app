import React from 'react';
import {Title, Image, MainButton, Square } from './ButtonStyles';
import Link from 'next/link';


const Button = ({color, title, source, url}) => {
  return ( 
    <Link href={`/${url}`}>
      <MainButton>
        <Square color={color}>
          <Image src={source} alt={title} />
        </Square>  
        <Title>{title}</Title>
      </MainButton>
    </Link>
   );
}
 
export default Button;