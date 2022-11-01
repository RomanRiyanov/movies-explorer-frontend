import React, {useEffect, useState} from "react";

import {
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import { CurrentUserContext } from '../context/CurrentUserContext';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Main from "../Main/Main";
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';


function App() {

  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
  });

  const [loggedIn, setLoggedIn] = useState(true);

  function onRegister() {
    console.log('зарегистрироваться');
  };

  function onLogin() {
    console.log('залогиниться');
  };

  return (
    <div className='body'>
      <div className='page'>
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <ProtectedRoute
            exact path="/movies"
            loggedIn={loggedIn}
            component={Movies}
          />
          <ProtectedRoute
            exact path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
          />
          <ProtectedRoute
            exact path="/profile"
            loggedIn={loggedIn}
            component={Profile}
          />
          <Route path='/main'>
            <Main/>
          </Route>
          <Route path='/signup'>
              <Register onRegister={onRegister}/>
          </Route>
          <Route path='/signin'>
              <Login onLogin={onLogin}/>
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
