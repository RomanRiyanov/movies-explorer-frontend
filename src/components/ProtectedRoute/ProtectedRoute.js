import React from "react";
import { Route, Switch } from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Main from "../Main/Main";

function ProtectedRoute (
    {loggedIn,
    moviesData,
    onMoviesFind,
    onSavedMoviesFind,
    keyword,
    keywordSavedMovies,
    onSignOut,
    onLogin,
    updateUser,
    onSaveMovie,
    onDeleteMovie,
    firstIterationMovies,
    onToolButtonClick,
    isPreloaderOpen,
    onFailUpdate,
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
            keywordSavedMovies={keywordSavedMovies}
            onSaveMovie={onSaveMovie}
            onDeleteMovie={onDeleteMovie}
            firstIterationMovies={firstIterationMovies}
            onToolButtonClick={onToolButtonClick}
            isPreloaderOpen={isPreloaderOpen}
          />
        </Route>

        <Route exact path="/saved-movies"> 
          <SavedMovies
            loggedIn={loggedIn}
            movies={moviesData}
            onMoviesFind={onSavedMoviesFind}
            keyword={keyword}
            keywordSavedMovies={keywordSavedMovies}
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
    : <Main loggedIn={loggedIn}/>
)
};

export default ProtectedRoute; 

