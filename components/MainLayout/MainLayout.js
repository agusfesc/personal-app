import React from 'react';
import Head from 'next/head'
import Header from '../Header/Header'
import {Main, Body} from './MainLayoutStyles';

const Layout = ({children}) => {
    
    return ( 
        <Body>
            <Head>
                <html lang="es" />
                <title>myapp</title>
                <link rel="icon" href="/favicon.ico"/>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Oswald:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
                <style jsx>{` body {
                    margin: 0px;
                }`}</style>
            </Head>
            <Header />
            <Main>
                
                {children}
            </Main>
            
        </Body>
     );
}
 
export default Layout;
