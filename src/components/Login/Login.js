import React, {useEffect, useState, useContext} from "react";
import headerLogoPath from '../../images/headerLogo.svg';
import {CurrentUserContext} from '../context/CurrentUserContext';
import { Formik, Field, Form } from 'formik';

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

    function handleLogin() {
        // event.preventDefault();
        onLogin();
    }

    return (
        <section className="register">
            <div className="regiter__header">
                <a href="main"> 
                    <img className='header__logo' src={headerLogoPath} alt='Логотип сайта'/>
                </a>
                <h2 className="register__tittle">Рады видеть!</h2>
            </div>
            <Formik 
            initialValues={{
                email_input: '',
                pass_input: ''
              }}
            onSubmit={handleLogin}>
                <Form className="register__form">
                    <label className="register__text" htmlFor='email_input'>E-mail</label>
                    <Field className="register__input" type='email' id='email_input' name='email_input' placeholder={'yenail@mail.com'} required></Field>
                    <label className="register__text" htmlFor='pass_input'>Пароль</label>
                    <Field className="register__input" type='password' id='pass_input' name='pass_input' required></Field>
                    <button type='submit' className='register__button register__button_type_login'>Войти</button>
                    <div className="register__nav">
                        <p className="register__link">Ещё не зарегистрированы?</p>
                        <Link onClick={signOut} className='register__link register__link_blue' to='/signup'>Регистрация</Link>
                    </div>
                </Form>
            </Formik>
        </section>
    );
}

export default Login;