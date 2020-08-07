import styled from 'styled-components';


export const Title = styled.h3`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 16px;
  text-align: center;
  color: #000000;
  @media (max-width: 768px){
    font-size: 0.75em;
  }
`

export const Image = styled.img`
  width: 60%;
`

export const MainButton = styled.div`
`

export const Square = styled.div`
  width: 160px;
  height: 160px;
  background-color: ${props => props.color};
  border-radius: 10px;
  display: flex;
  justify-content: center; 
  @media (max-width: 768px){
    width: 80px;
    height: 80px;
  }
`