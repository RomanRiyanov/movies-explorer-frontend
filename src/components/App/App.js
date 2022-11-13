import React, {useEffect, useState} from "react";

import {
  Route,
  Switch,
  Redirect,
  useHistory
} from 'react-router-dom';
import { CurrentUserContext } from '../context/CurrentUserContext';
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import ToolMenuPopup from '../ToolMenuPopup/ToolMenuPopup';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { moviesApi } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';

function App() {

  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
  });

  const [loggedIn, setLoggedIn] = useState(true);
  const [isRegisterSucceed, setRegisterSucceed] = useState(false);
  const [signInfoPopupOpen, setSignInfoPopupOpen] = useState(false);

  const [isToolPopupOpen, setToolPopupOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [keyword, setKeyword] = useState('');

  

  let history = useHistory();

  function handleGetMovies (keywordFromSearch) {
    console.log('принес в апп ключевое слово ' + keywordFromSearch);
    setKeyword(keywordFromSearch);

    moviesApi.getMovies()
      .then((moviesData) => {
        setMovies(moviesData);
      })
      .catch(err => {
        console.log('Ошибка ' + err)
      })
  }

  function onRegister({ name, email, password }) {
    console.log('зарегистрироваться');

    return mainApi.register({ name, email, password })
      .then((res) => {
        if (!res) {
          throw new Error ('Попробуйте ещё раз')
        };
        history.push('/signin');
        setRegisterSucceed(true);
        setSignInfoPopupOpen(true);
        return res;
      })
      .catch((err) => {
        setRegisterSucceed(false);
        console.log(`Ошибка при регистрации ${err}`);
        setSignInfoPopupOpen(true);
      })
  };

  function onLogin({ email, password }) {
    console.log('залогиниться');
    history.push('/movies');


    return mainApi.authorize({ email, password })
    .then((res) => {
        if (!res) {
            throw new Error ('Неверный email или пароль');
        }
        setLoggedIn(true);
        setRegisterSucceed(true);
        history.push('/movies');
    })
    .catch((err) => {
        setRegisterSucceed(false);
        console.log(`Ошибка при авторизации ${err}`);
        setSignInfoPopupOpen(true);
      });
  };

  function onSignOut(){
    return mainApi.signOut()
      .then((res) => {
        if (res) {
            setLoggedIn(false);
            return res;
        }
      })
      .catch(err => {
          console.log(`Ошибка при выходе из профиля ${err}`);
      });
  }

  function openToolPopup() {
    setToolPopupOpen(true);
  }

  function closeToolPopup() {
    setToolPopupOpen(false);
  }
  
  return (
    <div className='body'>
      <div className='page'>
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path='/signup'>
              <Register onRegister={onRegister}/>
          </Route>

          <Route exact path='/signin'>
              <Login onLogin={onLogin} onSignOut={onSignOut}/>
          </Route>
          
          <Route exact path='/page_not_found'>
            <PageNotFound />
          </Route>

          <Route path='/'>
            <Header onToolButtonClick={openToolPopup} />
            <Main 
              loggedIn={loggedIn}
              moviesData={movies}
              onMoviesFind={handleGetMovies}
              keyword={keyword}
              onSignOut={onSignOut}
            />
            <Footer />
          </Route>
        </Switch>

        <ToolMenuPopup isOpen={isToolPopupOpen} onClose={closeToolPopup} />

      </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
