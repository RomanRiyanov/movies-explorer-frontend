import React from "react";
import { Route, Switch } from "react-router-dom";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";

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
    firstIterationMovies,
    onToolButtonClick,
    isPreloaderOpen,
    onFailUpdate
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
            onFailUpdate={onFailUpdate}
          />
        </Route>
      </Switch>
    : <Login onLogin={onLogin} onSignOut={onSignOut}/>
)
};

export default ProtectedRoute; 

