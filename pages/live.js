import MainLayout from '../components/MainLayout/MainLayout';
import React, {useEffect, useState} from 'react';
import StreamContainer from '../components/StreamContainer/StreamContainer';
import styled from 'styled-components';

const Organizer = styled.div`
 display:flex;
 flex-direction: row;
 flex-wrap: wrap;
 justify-content: center;
`

const Live = () => {
  const [ streams, setStreams ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/vnd.twitchtv.v5+json");
  myHeaders.append("Client-ID", process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID);
  myHeaders.append("Authorization", process.env.NEXT_PUBLIC_TWITCH_AUTH);
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
    
    
    useEffect(() => {
      async function fetchAPI() {
        let response = await fetch("https://api.twitch.tv/kraken/streams/followed", requestOptions)
        response = await response.json()
        setStreams(response.streams)
        setIsLoading(false)
      }
      fetchAPI()
      }, [])

      while(isLoading){
        return null;
      }
      
  return ( 
    <MainLayout>
      <Organizer>
        {streams.map(stream =>{
              return(
              <StreamContainer stream={stream} key={stream.channel.display_name} />
              )
          })}
      </Organizer>
      
    </MainLayout>
   );
}
 
export default Live;