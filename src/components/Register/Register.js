import React, {useEffect, useState, useContext} from "react";
import headerLogoPath from '../../images/headerLogo.svg';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';

import {
    Link,
  } from 'react-router-dom';

function Register({onRegister}) {
    
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // function resetForm() {
    //     setName('');
    //     setEmail('');
    //     setPassword('');
    // }

    function signOut() {
        console.log('Войти в логин')
    };

    function handleRegister(values, setSubmitting) {
        // event.preventDefault();

        // onRegister({ name, email, password })
        onRegister(values)
          .then(() => {
            // resetForm();
            return;
          })
          .catch(err => {
            console.log('Ошибка при регистрации ' + err);
          })
          .finally(() => setSubmitting(false))
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
                    name: '', 
                    email: '',
                    password: ''
                }}
                validationSchema={yup.object().shape({
                    name: yup.string()
                        .min(2, 'Имя должно иметь больше двух символов')
                        .max(30, 'Имя не должно содержать больше 30 символов')
                        .matches(/^[- ?!,.a-zA-Zа-яА-ЯёЁ\s]+/, 'Цифры и спецсимволы запрещены')
                        .required('Необходимо ввести имя'),
                    email: yup.string()
                        .email('Значение email введено некорректно')
                        .required('Необходимо ввести email'),
                    password: yup.string()
                        .required('Необходимо ввести пароль'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    // console.log(values)
                    handleRegister(values, setSubmitting);
                }}
            >
            {({ errors, touched, values, isSubmitting, isValid, handleChange }) => (
                <Form className="register__form">
                    <label className="register__text" htmlFor='name_input'>Имя</label>
                    <Field 
                        value={values.name} 
                        // onChange={(event)=>setName(event.target.value)} 
                        onChange={handleChange} 
                        className="register__input" 
                        type='text' 
                        name='name' 
                        id='name_input' 
                        placeholder={'Имя'} 
                    >
                    </Field>
                    {errors.name && touched.name ? <p className='register__error register__error_firsInput'>{errors.name}</p> : null}
                    <label className="register__text" htmlFor='email_input'>E-mail</label>
                    <Field 
                        value={values.email} 
                        // onChange={(event)=>setEmail(event.target.value)}
                        onChange={handleChange} 
                        className="register__input" 
                        type='email' 
                        name='email' 
                        id='email_input' 
                        placeholder={'Введите email'}
                    >
                    </Field>
                    {errors.email && touched.email ? <p className='register__error register__error_secondInput'>{errors.email}</p> : null}
                    <label className="register__text" htmlFor='pass_input'>Пароль</label>
                    <Field 
                        value={values.password} 
                        // onChange={(event)=>setPassword(event.target.value)} 
                        onChange={handleChange} 
                        className="register__input" 
                        type='password' 
                        name='password' 
                        id='pass_input' 
                    >
                    </Field>
                    {errors.password && touched.password ? <p className='register__error register__error_thirdInput' >{errors.password}</p> : null}
                    <button type='submit' disabled={isSubmitting} className={isValid ? 'register__button' : 'register__button_disabled register__button'}>Зарегистироваться</button>
                    <div className="register__nav">
                        <p className="register__link">Уже зарегистрированы?</p>
                        <Link onClick={signOut} className='register__link register__link_blue' to='/signin'>Войти</Link>
                    </div>
                </Form>
            )}
            </Formik>
        </section>
    );
}

export default Register;