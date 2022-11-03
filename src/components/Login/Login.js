import React, {useEffect, useState, useContext} from "react";
import headerLogoPath from '../../images/headerLogo.svg';
import {CurrentUserContext} from '../context/CurrentUserContext';

import {
    Route,
    Switch,
    Link,
  } from 'react-router-dom';

function Login({onLogin}) {

    const currentUser = useContext(CurrentUserContext);

    function signOut() {
        console.log('Переход в регистрацию')
    };

    function handleLogin(event) {
        event.preventDefault();
        onLogin();
    }

    return (
        <section className="register">
            <div className="regiter__header">
                <img className='header__logo' src={headerLogoPath} alt='Логотип сайта'/>
                <h2 className="register__tittle">Рады видеть!</h2>
            </div>
            <form onSubmit={handleLogin} className="register__form">
                <label className="register__text" htmlFor='email_input'>E-mail</label>
                <input className="register__input" name='email_input' placeholder={'yenail@mail.com'}></input>
                <label className="register__text" htmlFor='pass_input'>Пароль</label>
                <input className="register__input" type='password' name='pass_input'></input>
                <button type='submit' className='register__button register__button_type_login'>Войти</button>
                <div className="register__nav">
                    <p className="register__link">Ещё не зарегистрированы?</p>
                    <Link onClick={signOut} className='register__link register__link_blue' to='/signup'>Регистрация</Link>
                </div>
            </form>
        </section>
    );
}

export default Login;