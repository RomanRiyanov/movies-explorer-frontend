import React, { useEffect, useRef } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";

function ProtectedRoute (
    {loggedIn,
    moviesData,
    onMoviesFind,
    keyword,
    onSignOut,
    updateUser,
    onSaveMovie,
    onDeleteMovie,
    onMountAllSavedMovies,
    firstIterationMovies,
    onToolButtonClick}
  ) {

    useEffect(() => {
      // if (loggedIn === 'false') {
        console.log(loggedIn)
        // return <Redirect to='signin'/>
  
    }, [])

  return (
    loggedIn &&
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
  )
};

export default ProtectedRoute; 