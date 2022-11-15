import React, {useEffect, useState, useContext} from "react";
import headerLogoPath from '../../images/headerLogo.svg';
import { Formik, Field, Form } from 'formik';

import {
    Route,
    Switch,
    Link,
  } from 'react-router-dom';

function Login({onLogin, onSignOut}) {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function resetForm() {
        setEmail('');
        setPassword('');
    }

    function signOut() {
        console.log('Переход в регистрацию');
        onSignOut();
    };

    function handleLogin(event) {
        // event.preventDefault();
        console.log('Залогиниться');

        onLogin({email, password})
        .then(() => {
            resetForm();
          })
          .catch(err => {
            console.log('Ошибка при авторизации ' + err);
          });
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
                    <Field 
                        className="register__input"
                        onChange={(event)=>setEmail(event.target.value)} 
                        type='email' 
                        id='email_input' 
                        name='email_input' 
                        placeholder={'yenail@mail.com'}
                        value={email}
                        required>
                    </Field>
                    <label className="register__text" htmlFor='pass_input'>Пароль</label>
                    <Field 
                        className="register__input" 
                        onChange={(event)=>setPassword(event.target.value)} 
                        type='password' 
                        id='pass_input' 
                        name='pass_input'
                        value={password}
                        required>
                    </Field>
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