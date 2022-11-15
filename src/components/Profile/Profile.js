import React, {useEffect, useState, useContext} from "react";
import {CurrentUserContext} from '../context/CurrentUserContext';
import { Formik, Field, Form } from 'formik';

import {
    Link,
    useHistory
  } from 'react-router-dom';

function Profile({onSignOut, updateUser}) {

    const currentUser = useContext(CurrentUserContext);


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const history = useHistory();

    function signOut() {
        console.log('Выйти из аккаунта');
        onSignOut();
        history.push('/main');
    };

    function editProfile() {
        console.log('Редактировать аккаунт');
        
        let sendedName = currentUser.name;
        let sendedEmail = currentUser.email;

        if (name !== '') sendedName = name;
        if (email !== '') sendedEmail = email;


        updateUser(sendedName, sendedEmail)
            .then((res) => {
                return res;
            })
            .catch(err => {
                console.log('Ошибка при регистрации ' + err);
            });
    }

    return (
        <section className="profile__container">
                <h2 className="profile__tittle">{`Привет, ${currentUser.name}!`}</h2>
                <Formik
                    onSubmit={editProfile}
                    initialValues={{
                        name_input: '', 
                        email_input: ''
                    }}>
                    <Form  className="profile__form">
                        <div className="profile__input_container">
                            <label className="profile__text" htmlFor='name_input'>Имя</label>
                            <Field 
                                className="profile__input" 
                                type='text' 
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                name='name_input'
                                id="name_input"
                                placeholder={currentUser.name} 
                                minLength='2' 
                                maxLength='30' 
                                > 
                            </Field>
                        </div>
                    <div className='profile__line'></div>
                        <div className="profile__input_container">
                            <label className="profile__text" htmlFor='email_input'>E-mail</label>
                            <Field 
                                className="profile__input" 
                                type='email' 
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                name='email_input'
                                id='email_input'
                                placeholder={currentUser.email}
                                >
                            </Field>
                        </div>
                    </Form>
                </Formik>
                <button type="button" onClick={editProfile} className='profile__link'>Редактировать</button>
                <Link onClick={signOut} className='profile__link profile__link_red' to='/main'>Выйти из аккаунта</Link>
        </section>
    );
}

export default Profile;