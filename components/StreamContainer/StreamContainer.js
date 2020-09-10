import React from 'react';
import { MainButton, Image, Title, Url, } from './StreamContainerStyles';


const StreamContainer = ({stream}) => {
  return ( 
    
      <MainButton>
        <Url href={stream.channel.url} target="_blank" >
          <div>
            <Image src={stream.preview.large} alt={stream.channel.display_name} />
          </div>
          <Title> {stream.channel.status} </Title>
          
        </Url>
      </MainButton>
    
   );
}
 
export default StreamContainer;