import React from 'react';
import Header from '../header/';
import Footer from '../footer/';
import TasksList from '../tasksList/';
import Wrapper from '../wrapper/';

export default function TasksPage(){
    return(
        <Wrapper>
            <Header/>
            <TasksList />
            <Footer/>
        </Wrapper>
    )
}