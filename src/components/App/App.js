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
          <Route exact path='/signup'>
              <Register onRegister={onRegister}/>
          </Route>

          <Route exact path='/signin'>
              <Login onLogin={onLogin}/>
          </Route>
          
          <Route exact path='/page_not_found'>
            <PageNotFound />
          </Route>

          <Route path='/'>
            <Header onToolButtonClick={openToolPopup} />
            <Main loggedIn={loggedIn}/>
            <Footer />
          </Route>
        </Switch>

        <ToolMenuPopup isOpen={isToolPopupOpen} onClose={closeToolPopup}/>

      </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
