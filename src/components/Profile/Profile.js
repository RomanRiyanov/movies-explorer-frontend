import React, {useContext, useEffect, useState} from "react";
import {CurrentUserContext} from '../context/CurrentUserContext';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import Header from "../Header/Header";
import { Link } from 'react-router-dom';

function Profile({onSignOut, updateUser, onToolButtonClick, loggedIn, onFailUpdate}) {

    const currentUser = useContext(CurrentUserContext);

    function signOut() {
        onSignOut();
    };

    function editProfile(values) {        
        let sendedName = currentUser.name;
        let sendedEmail = currentUser.email;

        if ((values.name !== sendedName) || (values.email !== sendedEmail)) {
            updateUser(values.name, values.email)
                .then((res) => {
                    return res;
                })
                .catch(err => {
                    console.log('Ошибка при регистрации ' + err);
                });
        }
        else onFailUpdate();
    }

    return (
        <>   
        <Header onToolButtonClick={onToolButtonClick} loggedIn={loggedIn}/>
            <section className="profile__container">
            <h2 className="profile__tittle">{`Привет, ${currentUser.name}!`}</h2>
                <Formik
                    initialValues = {{
                        name: currentUser.name, 
                        email: currentUser.email
                    }}
                    enableReinitialize
                    validationSchema={yup.object().shape({
                        name: yup.string()
                            .min(2, 'Больше двух букв')
                            .max(30, 'Не больше 30ти букв')
                            .matches(/^[- ?!,.a-zA-Zа-яА-ЯёЁ\s]+/, 'Цифры и спецсимволы запрещены')
                            .required('Необходимо ввести имя'),
                        email: yup.string()
                            .email('E-mail некорректный')
                            .required('Необходимо ввести email'),
                    })}
                    onSubmit={(values) => {
                        editProfile(values);
                    }}
                >
                {({ errors, touched, values, dirty, isValid, handleChange }) => (
                    <Form  className="profile__form">
                        <div className="profile__input_container">
                            <label className="profile__text" htmlFor='name_input'>Имя</label>
                            <Field 
                                className="profile__input" 
                                type='text' 
                                value={values.name}
                                onChange={handleChange} 
                                name='name'
                                id="name_input"
                            > 
                            </Field>
                            {errors.name && touched.name ? <p className='register__error register__error_profile'>{errors.name}</p> : null}
                        </div>
                    <div className='profile__line'></div>
                        <div className="profile__input_container">
                            <label className="profile__text" htmlFor='email_input'>E-mail</label>
                            <Field 
                                className="profile__input" 
                                type='email' 
                                value={values.email}
                                onChange={handleChange} 
                                name='email'
                                id='email_input'
                            >
                            </Field>
                            {errors.email && touched.email ? <p className='register__error register__error_profile'>{errors.email}</p> : null}
                        </div>
                        <button type="submit" disabled={!(isValid && dirty)} className={(isValid && dirty) ? 'profile__link' : 'profile__link profile__link_disabled'}>Редактировать</button>
                    </Form>
                    )}
                </Formik>
                <Link onClick={signOut} className='profile__link profile__link_red' to='/main'>Выйти из аккаунта</Link>
            </section>
        </>
    );
}

export default Profile;