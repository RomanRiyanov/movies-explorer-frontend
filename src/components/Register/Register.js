import React, {useEffect, useState, useContext} from "react";
import headerLogoPath from '../../images/headerLogo.svg';
import { Formik, Field, Form } from 'formik';

import {
    Link,
  } from 'react-router-dom';

function Register({onRegister}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function signOut() {
        console.log('Войти в логин')
    };

    function resetForm() {
        setName('');
        setEmail('');
        setPassword('');
    }

    function handleRegister(event) {
        // event.preventDefault();

        onRegister({ name, email, password })
          .then(() => {
            resetForm();
          })
          .catch(err => {
            console.log('Ошибка при регистрации ' + err);
          });
    }

    return (
        <section className="register">
            <div className="regiter__header">
                <a href="main"> 
                    <img className='header__logo' src={headerLogoPath} alt='Логотип сайта'/>
                </a>
                <h2 className="register__tittle">Добро пожаловать!</h2>
            </div>
            <Formik 
            initialValues={{
                name_input: '', 
                email_input: '',
                pass_input: ''
              }}
            onSubmit={handleRegister}>
                <Form className="register__form">
                    <label className="register__text" htmlFor='name_input'>Имя</label>
                    <Field 
                        value={name} 
                        onChange={(event)=>setName(event.target.value)} 
                        className="register__input" 
                        type='text' 
                        name='name_input' 
                        id='name_input' 
                        placeholder={'Ромашка'} 
                        minLength="2"
                        required>
                    </Field>
                    <label className="register__text" htmlFor='email_input'>E-mail</label>
                    <Field 
                        value={email} 
                        onChange={(event)=>setEmail(event.target.value)}
                        className="register__input" 
                        type='email' 
                        name='email_input' 
                        id='email_input' 
                        placeholder={'yenail@mail.com'}
                        required>
                    </Field>
                    <label className="register__text" htmlFor='pass_input'>Пароль</label>
                    <Field 
                        value={password} 
                        onChange={(event)=>setPassword(event.target.value)} 
                        className="register__input" 
                        type='password' 
                        name='pass_input' 
                        id='pass_input' 
                        minLength="8" 
                        required>
                    </Field>
                    <button type='submit' className='register__button'>Зарегистироваться</button>
                    <div className="register__nav">
                        <p className="register__link">Уже зарегистрированы?</p>
                        <Link onClick={signOut} className='register__link register__link_blue' to='/signin'>Войти</Link>
                    </div>
                </Form>
            </Formik>
        </section>
    );
}

export default Register;