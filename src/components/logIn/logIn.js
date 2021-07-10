import React, {Component} from 'react';
import Container from '../container';
import MainContent from '../mainContent/';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { updateEmail, updatePassword } from '../../actions';
import './logIn.scss';

const mapStateToProps = ({logIn}) =>{
    return {
        email: logIn.email,
        password: logIn.password
    }
}

const mapDispatchToProps = {
    updateEmail,
    updatePassword
}

class LogIn extends Component {

    onSubmit = (e) =>{
        e.preventDefault();
        const {email,password} = this.props;
        if(email==='admin@transtelematic.ru'&&password==='admin'){
            this.props.history.push('tasks');
        }
        else{
            alert('Неправильный логин или пароль');
            this.props.updateEmail('');
            this.props.updatePassword('');
        }
    }

    render() {
        const {email, password, updateEmail, updatePassword} = this.props;
        return(
            <MainContent>
            <div className='log-panel'>
                <Container>
                    <form className='log-panel__block' onSubmit={this.onSubmit}>
                        <h2 className='log-panel__title'>Вход</h2>
                        <div className='log-panel__login'>
                            <label htmlFor='email'>
                                Email
                                <input id='email'
                                name='email'
                                type='email'
                                value={email}
                                onChange={(e) =>{
                                    updateEmail(e.target.value)
                                }}
                                ></input></label>
                        </div>
                        <div className='log-panel__login'>
                            <label htmlFor='password'>
                                Пароль
                                <input id='password'
                                name='login'
                                type='password'
                                value={password}
                                onChange={(e) =>{
                                    updatePassword(e.target.value)
                                }}
                                ></input></label>
                        </div>
                        <button className='log-panel__submit'>Войти</button>
                    </form>
                </Container>
            </div>
        </MainContent>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogIn));