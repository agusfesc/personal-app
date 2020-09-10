import styled from 'styled-components';

export const Image = styled.img`
  width: 400px;
  height: 200px;
  border-radius: 10px;
  
  @media (max-width: 768px){
    width: 140px;
    height: 70px;
  }
`

export const MainButton = styled.div`
  padding: 50px;
  
  @media (max-width: 768px){
    padding: 0.75em;
  }
`

export const Title = styled.h1`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #000000;
  max-width: 300px;
  @media (max-width: 768px){
    font-size: 0.50em;
    max-width: 100px;
  }
`



export const Url = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center; 
`