import React, {useEffect, useState, useContext} from "react";
import {CurrentUserContext} from '../context/CurrentUserContext';

import Header from "../Header/Header";
import {
    Route,
    Switch,
    Link,
  } from 'react-router-dom';

function Profile() {

    const currentUser = useContext(CurrentUserContext);

    function signOut() {
        console.log('Выйти из аккаунта')
    };

    function editProfile() {
        console.log('Редактировать аккаунт')
    }

    return (
        <section className="profile__container">
            <Header/>
                <h2 className="profile__tittle">Привет, Ромашка!</h2>
                <form className="profile__form">
                    <div className="profile__input_container">
                        <label className="profile__text" htmlFor='name_input'>Имя</label>
                        <input className="profile__input" name='name_input' placeholder={'Ромашка'}></input>
                    </div>
                <div className='profile__line'></div>
                    <div className="profile__input_container">
                        <label className="profile__text" htmlFor='email_input'>E-mail</label>
                        <input className="profile__input" name='email_input' placeholder={'yenail@mail.com'}></input>
                    </div>
                </form>
                <button onClick={editProfile} className='profile__link'>Редактировать</button>
                <Link onClick={signOut} className='profile__link profile__link_red' to='/sign-in'>Выйти из аккаунта</Link>
        </section>
    );
}

export default Profile;