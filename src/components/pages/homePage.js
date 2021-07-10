import React from 'react';
import Header from '../header/';
import Footer from '../footer/';
import LogIn from '../logIn';
import Wrapper from '../wrapper/';

export default function HomePage() {
    return(
        <Wrapper>
            <Header/>
            <LogIn />
            <Footer />
        </Wrapper>
    )
}