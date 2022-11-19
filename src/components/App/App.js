import React, {useEffect, useState} from "react";

import {
  Route,
  Switch,
  Redirect,
  useHistory
} from 'react-router-dom';

// import { history } from '../../index';
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
  });

  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [isSignSucceed, setSignSucceed] = useState(false);
  const [isInfoPopupOpen, setInfoPopupOpen] = useState(false);
  const [isToolPopupOpen, setToolPopupOpen] = useState(false);

  const [movies, setMovies] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [firstIterationMovies, setFirstIterationMovies] = useState([]);

  

  let history = useHistory();

  function openToolPopup() {
    setToolPopupOpen(true);
  }
  
  function openInfoPopup() {
    setInfoPopupOpen(true);
  }

  function closeAllPopups() {
    setToolPopupOpen(false);
    setInfoPopupOpen(false);
  }

  function handleGetMovies (keywordFromSearch) {
    console.log('принес в апп ключевое слово ' + keywordFromSearch);
    setKeyword(keywordFromSearch);
    setIsLoading(true);

    moviesApi.getMovies()
      .then((moviesData) => {
        setMovies(moviesData);
        setIsLoading(false);
      })
      .catch(err => {
        console.log('Ошибка ' + err)
      })
      .finally(() => setIsLoading(false))
  }

  function onRegister({ name, email, password }) {
    console.log('зарегистрироваться');

    return mainApi.register({ name, email, password })
      .then((res) => {
        if (!res) {
          throw new Error ('Попробуйте ещё раз')
        };
        history.push('/signin');
        setSignSucceed(true);
        setInfoPopupOpen(true);
        return res;
      })
      .catch((err) => {
        setSignSucceed(false);
        console.log(`Ошибка при регистрации ${err}`);
        setInfoPopupOpen(true);
      })
  };

  function onLogin({ email, password }) {
    console.log('залогиниться');
    // history.push('/movies');


    return mainApi.authorize({ email, password })
      .then((res) => {
          if (!res) {
              throw new Error ('Неверный email или пароль');
          }
          // setLoggedIn(true);
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
            setLoggedIn(false);
            return res;
        }
      })
      .catch(err => {
          console.log(`Ошибка при выходе из профиля ${err}`);
      });
  }

  function onUpdateUser(name, email) {
    return mainApi.updateUserInfo(name, email)
      .then((res) => {
        if (res) {
          setCurrentUser({name: name, email: email});
          return res;
        }
      })
      .catch(err => {
        console.log(`Ошибка при обновлении профиля ${err}`);
        console.log(err);
    });
  }

  function onSaveMovie(movie) {
    return mainApi.createMovie(movie)
      .then((res) => {
        if (res) {
          return res;
        }
      })
      .catch(err => {
        console.log(`Ошибка при создании фильма ${err}`);
        console.log(err);
      }); 
  }

  function onDeleteMovie(deletedMovieId) {
    return mainApi.deleteMovie(deletedMovieId)
      .then((res) => {
        if (res) {
          return res;
        }
      })
      .catch(err => {
        console.log(`Ошибка при удалении фильма ${err}`);
        console.log(err);
      }); 
  }

  useEffect(() => {
    mainApi.getMovies()
      .then(res => setFirstIterationMovies(res))
      .catch(err => console.log(err))
  }, [])

    
function tokenCheck () {
  console.log('hello')

  mainApi.getUserInfo()
    .then(userData => {
      if (!userData) {
        throw new Error ('Неверный email или пароль');
    }
        console.log('world')

        setLoggedIn(true);

        setCurrentUser({
          name: userData.name,
          email: userData.email
        })
      })
    .catch(err => {
      console.log(err)
    })

    return () => {console.log('demontage')}

}

useEffect(() => {        
  tokenCheck();
}, []);

// if (isLoading) 
// {return 'loadindg...'};

  return (
    <div className='body'>
      <div className='page'>
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/main'/>
          </Route>

          <Route path='/signup'>
            <Register onRegister={onRegister}/>
          </Route>

          <Route path='/signin'>
            <Login onLogin={onLogin} onSignOut={onSignOut}/>
          </Route>

          <Route path='/main'>
            <Main />
          </Route>

          {/* {loggedIn &&  */}
          <Route path={["/movies", "/saved-movies", "/profile"]}>
            <ProtectedRoute
              onToolButtonClick={openToolPopup}
              loggedIn={loggedIn}
              moviesData={movies}
              onMoviesFind={handleGetMovies}
              keyword={keyword}
              onLogin={onLogin}
              onSignOut={onSignOut}
              updateUser={onUpdateUser}
              onSaveMovie={onSaveMovie}
              onDeleteMovie={onDeleteMovie}
              firstIterationMovies={firstIterationMovies}
              isPreloaderOpen={isLoading}>
            </ProtectedRoute>
          </Route>
          {/* // }      */}

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
