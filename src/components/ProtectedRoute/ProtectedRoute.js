import React, { useEffect, useRef } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import InfoPopup from "../InfoPopup/InfoPopup";

function ProtectedRoute (
    {loggedIn,
    moviesData,
    onMoviesFind,
    keyword,
    onSignOut,
    onLogin,
    updateUser,
    onSaveMovie,
    onDeleteMovie,
    onMountAllSavedMovies,
    firstIterationMovies,
    onToolButtonClick,
    isPreloaderOpen
  }
  ) {

  return (
    loggedIn ?
      <Switch>
        <Route exact path="/movies"> 
          <Movies
            loggedIn={loggedIn}
            movies={moviesData}
            onMoviesFind={onMoviesFind}
            keyword={keyword}
            onSaveMovie={onSaveMovie}
            onDeleteMovie={onDeleteMovie}
            firstIterationMovies={firstIterationMovies}
            onToolButtonClick={onToolButtonClick}
            isPreloaderOpen={isPreloaderOpen}
          />
        </Route>

        <Route exact path="/saved-movies"> 
          <Movies
            loggedIn={loggedIn}
            movies={moviesData}
            onMoviesFind={onMoviesFind}
            keyword={keyword}
            onSaveMovie={onSaveMovie}
            onDeleteMovie={onDeleteMovie}
            firstIterationMovies={firstIterationMovies}
            onToolButtonClick={onToolButtonClick}
            isPreloaderOpen={isPreloaderOpen}
          />
        </Route>

        <Route exact path="/profile"> 
          <Profile
            loggedIn={loggedIn}
            component={Profile}
            onSignOut={onSignOut}
            updateUser={updateUser}
            onToolButtonClick={onToolButtonClick}
          />
        </Route>
      </Switch>
    : <Login onLogin={onLogin} onSignOut={onSignOut}/>
)
};

export default ProtectedRoute; 
// : 'Хуйня'
{/* <Login onLogin={onLogin} onSignOut={onSignOut}/> */}
