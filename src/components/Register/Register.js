import React, {useEffect, useState, useContext} from "react";
import headerLogoPath from '../../images/headerLogo.svg';
import {CurrentUserContext} from '../context/CurrentUserContext';

import {
    Route,
    Switch,
    Link,
  } from 'react-router-dom';

function Register({onRegister}) {

    const currentUser = useContext(CurrentUserContext);

    function signOut() {
        console.log('Войти в логин')
    };

    function handleRegister(event) {
        event.preventDefault();
        return onRegister();
    }

    return (
        <section className="register">
            <div className="regiter__header">
                <img className='header__logo' src={headerLogoPath} alt='Логотип сайта'/>
                <h2 className="register__tittle">Добро пожаловать!</h2>
            </div>
            <form onSubmit={handleRegister} className="register__form">
                <label className="register__text" htmlFor='name_input'>Имя</label>
                <input className="register__input" name='name_input' placeholder={'Ромашка'}></input>
                <label className="register__text" htmlFor='email_input'>E-mail</label>
                <input className="register__input" name='email_input' placeholder={'yenail@mail.com'}></input>
                <label className="register__text" htmlFor='pass_input'>Пароль</label>
                <input className="register__input" type='password' name='pass_input'></input>
                <button type='submit' className='register__button'>Зарегистироваться</button>
                <div className="register__nav">
                    <p className="register__link">Уже зарегистрированы?</p>
                    <Link onClick={signOut} className='register__link register__link_blue' to='/signin'>Войти</Link>
                </div>
            </form>
        </section>
    );
}

export default Register;