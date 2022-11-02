import React, {useEffect, useState} from "react";

import {
  Route,
  Switch,
  Link,
  useHistory
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
import ToolMenuPopup from '../ToolMenuPopup/ToolMenuPopup';


function App() {

  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
  });

  const [loggedIn, setLoggedIn] = useState(true);
  const [isToolPopupOpen, setToolPopupOpen] = useState(false);

  let history = useHistory();

  function onRegister() {
    console.log('зарегистрироваться');
    history.push('/signin');
  };

  function onLogin() {
    console.log('залогиниться');
    history.push('/movies');
  };

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
          <ProtectedRoute
            onToolButtonClick={openToolPopup}
            exact path="/movies"
            loggedIn={loggedIn}
            component={Movies}
          />
          <ProtectedRoute
            onToolButtonClick={openToolPopup}
            exact path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
          />
          <ProtectedRoute
            onToolButtonClick={openToolPopup}
            exact path="/profile"
            loggedIn={loggedIn}
            component={Profile}
          />
          <Route path='/main'>
            <Main />
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

        <ToolMenuPopup isOpen={isToolPopupOpen} onClose={closeToolPopup}/>

      </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
