import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import {HomePage, TaskPage,DetailsPage} from '../pages';
import './app.scss';

function mapStateToProps({data}) {
    return {
        data
    };
}

class App extends Component {
    render() {
        return (
        
            <>
                <Route path='/' exact component={HomePage} />
                <Route path='/tasks' exact component={TaskPage} />
                <Route path='/tasks/:id' render={
                    ({match}) =>{
                        const {id} = match.params;
                        return <DetailsPage dataId={+id-1} />
                    }
                } />
            </>
        
        );
    }
}

export default connect(
    mapStateToProps,
)(App);