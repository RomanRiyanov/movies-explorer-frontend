import React from "react";
import headerLogoPath from '../../images/headerLogo.svg';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';

import { Link } from 'react-router-dom';

function Login({onLogin, onSignOut}) {

    function signOut() {
        console.log('Переход в регистрацию');
        onSignOut();
    };

    function handleLogin(values, setSubmitting) {

        onLogin(values)
        .then(() => {
            return;
          })
          .catch(err => {
            console.log('Ошибка при авторизации ' + err);
          })
          .finally(() => setSubmitting(false))
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
                    email: '',
                    password: ''
                }}
                validationSchema={yup.object().shape({
                    email: yup.string()
                        .email('Значение email введено некорректно')
                        .required('Необходимо ввести email'),
                    password: yup.string()
                        .required('Необходимо ввести пароль'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    handleLogin(values, setSubmitting);
                }}
            >
            {({ errors, touched, values, isSubmitting, isValid, handleChange }) => (
                <Form className="register__form">
                    <label className="register__text" htmlFor='email_input'>E-mail</label>
                    <Field 
                        className="register__input"
                        onChange={handleChange} 
                        id='email_input' 
                        name='email' 
                        placeholder={'Введите email'}
                        value={values.email}
                        >
                    </Field>
                    {errors.email && touched.email ? <p className='register__error register__error_firsInput'>{errors.email}</p> : null}
                    <label className="register__text" htmlFor='pass_input'>Пароль</label>
                    <Field 
                        className="register__input"
                        onChange={handleChange} 
                        type='password' 
                        id='password_input' 
                        name='password'
                        placeholder={'Введите пароль'}
                        value={values.password}
                        >
                    </Field>
                    {errors.password && touched.password ? <p className='register__error register__error_secondInput' >{errors.password}</p> : null}
                    <button type='submit' disabled={!isValid} className={isValid ? 'register__button register__button_type_login' : 'register__button_disabled register__button register__button_type_login'}>Войти</button>
                    <div className="register__nav">
                        <p className="register__link">Ещё не зарегистрированы?</p>
                        <Link onClick={signOut} className='register__link register__link_blue' to='/signup'>Регистрация</Link>
                    </div>
                </Form>
                )}
            </Formik>
        </section>
    );
}

export default Login;