import React, {useEffect, useState} from "react";

import {
  Route,
  Switch,
  Redirect,
  useHistory,
} from 'react-router-dom';

import { CurrentUserContext } from '../context/CurrentUserContext';
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import ToolMenuPopup from '../ToolMenuPopup/ToolMenuPopup';
import InfoPopup from "../InfoPopup/InfoPopup";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";

import { moviesApi } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';
import Preloader from "../Preloader/Preloader";

function App() {

  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    id: ""
  });

  const [isFileLoading, setIsFileloading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [isSignSucceed, setSignSucceed] = useState(false);
  const [isInfoPopupOpen, setInfoPopupOpen] = useState(false);
  const [isToolPopupOpen, setToolPopupOpen] = useState(false);

  const [movies, setMovies] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [keywordSavedMovies, setKeywordSavedMovies] = useState('');
  const [firstIterationMovies, setFirstIterationMovies] = useState([]);

  let history = useHistory();

  function openToolPopup() {
    setToolPopupOpen(true);
  }

  function closeAllPopups() {
    setToolPopupOpen(false);
    setInfoPopupOpen(false);
  }

  function handleGetMovies (keywordFromSearch) {
    setKeyword(keywordFromSearch);
  }

  function handleGetSavedMovies (keywordFromSearch) {
    setKeywordSavedMovies(keywordFromSearch);
  }

  function onRegister({ name, email, password }) {

    return mainApi.register({ name, email, password })
      .then((res) => {
        if (!res) {
          throw new Error ('Попробуйте ещё раз')
        };
        setSignSucceed(true);
        setInfoPopupOpen(true);
        onLogin({ email, password });
        return res;
      })
      .catch((err) => {
        setSignSucceed(false);
        console.log(`Ошибка при регистрации ${err}`);
        setInfoPopupOpen(true);
      })
  };

  function onLogin({ email, password }) {

    return mainApi.authorize({ email, password })
      .then((res) => {
          if (!res) {
              throw new Error ('Неверный email или пароль');
          }
          tokenCheck();
          setSignSucceed(true);
          history.push('/movies');
      })
      .catch((err) => {
          setSignSucceed(false);
          console.log(`Ошибка при авторизации ${err}`);
          setInfoPopupOpen(true);
        });
  };

  function onSignOut(){

    return mainApi.signOut()
      .then((res) => {
        if (res) {
            localStorage.clear();
            history.push('/');
            setLoggedIn(false);
            setKeyword('');
            setKeywordSavedMovies('');
            return res;
        }
      })
      .catch(err => {
          localStorage.clear();
          setLoggedIn(false);
          setKeyword('');
          setKeywordSavedMovies('');
          console.log(`Ошибка при выходе из профиля ${err}`);
      });
  }

  function onUpdateUser(name, email) {
    return mainApi.updateUserInfo(name, email)
      .then((res) => {
        if (res) {
          setCurrentUser({name: name, email: email});
          setSignSucceed(true);
          setInfoPopupOpen(true);
          return res;
        }
      })
      .catch(err => {
        setSignSucceed(false);
        setInfoPopupOpen(true);
        console.log(`Ошибка при обновлении профиля ${err}`);
    });
  }

  function handleFailUpdate() {
    setSignSucceed(false);
    setInfoPopupOpen(true);
  }

  function onSaveMovie(movie) {
    return mainApi.createMovie(movie)
      .then((res) => {
        if (res) {
          setFirstIterationMovies((state) => [...state, res])
          return res;
        }
      })
      .catch(err => {
        onSignOut();
        console.log(`Ошибка при создании фильма ${err}`);
      }); 
  }

  function onDeleteMovie(deletedMovieId) {
    return mainApi.deleteMovie(deletedMovieId)
      .then((res) => {
        if (res) {
          setFirstIterationMovies(state => {return state.filter((item) => (item.movieId ?? item.id) !== deletedMovieId)});

          return res;
        }
      })
      .catch(err => {
        onSignOut();
        console.log(`Ошибка при удалении фильма ${err}`);
      }); 
  }

  useEffect(() => {
      setIsFileloading(true);
      if (localStorage.getItem('localStorageMovies')) {
        setMovies(JSON.parse(localStorage.getItem('localStorageMovies')));
        setIsFileloading(false);
        return;
      }
      else {
        moviesApi.getMovies()
          .then((moviesData) => {
            localStorage.setItem('localStorageMovies', JSON.stringify(moviesData));
            setMovies(moviesData);
          })
          .catch(err => {
            console.log('Ошибка ' + err)
          })
          .finally(() => {
            setIsFileloading(false);
          })
      }
  }, [])

useEffect(() => {
  if( loggedIn) {
    setIsFileloading(true);
    
    mainApi.getMovies()
    .then(res => {
      setFirstIterationMovies(res);
    })
    .catch(err => console.log(err))
    .finally(() => {setIsFileloading(false);})
  }
}, [loggedIn])

function tokenCheck () {
  setIsFileloading(true);

  mainApi.getUserInfo()
    .then(userData => {
      if (!userData) {
        localStorage.clear();
        throw new Error ('Неверный email или пароль');
      }
        setLoggedIn(true);

        setCurrentUser({
          name: userData.name,
          email: userData.email,
          id: userData._id
        })        
      })
    .catch(err => {
      onSignOut();
      console.log(err)
    })
    .finally(() => {setIsFileloading(false);
    })
}

useEffect(() => {        
  tokenCheck();
}, []);

if (isFileLoading) 
{return <Preloader />};

  return (
    <div className='body'>
      <div className='page'>
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/main'/>
          </Route>

          <Route path='/signup'>
            <Register onRegister={onRegister} loggedIn={loggedIn}/>
          </Route>

          <Route path='/signin'>
            <Login onLogin={onLogin} onSignOut={onSignOut} loggedIn={loggedIn}/>
          </Route>

          <Route path='/main'>
            <Main loggedIn={loggedIn}/>
          </Route>

          <Route path={["/movies", "/saved-movies", "/profile"]}>
            <ProtectedRoute
              onToolButtonClick={openToolPopup}
              loggedIn={loggedIn}
              moviesData={movies}
              onMoviesFind={handleGetMovies}
              onSavedMoviesFind={handleGetSavedMovies}
              keyword={keyword}
              keywordSavedMovies={keywordSavedMovies}
              onLogin={onLogin}
              onSignOut={onSignOut}
              updateUser={onUpdateUser}
              onSaveMovie={onSaveMovie}
              onDeleteMovie={onDeleteMovie}
              firstIterationMovies={firstIterationMovies}
              isPreloaderOpen={isLoading}
              onFailUpdate={handleFailUpdate}>
            </ProtectedRoute>
          </Route>

          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>

        <ToolMenuPopup isOpen={isToolPopupOpen} onClose={closeAllPopups} />
        <InfoPopup success={isSignSucceed} isOpen={isInfoPopupOpen} onClose={closeAllPopups}/>

      </CurrentUserContext.Provider>
    </div>
    </div>
  );
}

export default App;
