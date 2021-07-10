import React from 'react';
import Header from '../header/';
import Footer from '../footer/';
import Wrapper from '../wrapper/';
import TaskDetails from '../taskDetails/';

export default function DetailsPage({dataId}) {
    return(
        <Wrapper>
            <Header/>
            <TaskDetails dataId={dataId} />
            <Footer/>
        </Wrapper>
    )
}