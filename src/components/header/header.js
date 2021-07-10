import React from 'react';
import Container from '../container/';
import './header.scss';

export default function Header(){
    return(
        <header className='header'>
            <Container>
                <div className='header__block'>
                    <h1 className='header__title'>Тестовое задание Транстелематика</h1>
                </div>
            </Container>
        </header>
    )
}