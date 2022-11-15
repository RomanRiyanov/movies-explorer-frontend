import Promo from "../Promo/Promo.js";
import AboutProject from "../AboutProject/AboutProject.js";
import Techs from "../Techs/Techs.js";
import Portfolio from "../Portfolio/Portfolio.js";

import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Profile from "../Profile/Profile.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import Preloader from "../Preloader/Preloader.js";

import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

// function Main() {
//     return (
//         <section className="main__container" id="main__container">
//           <Promo />
//           <AboutProject />
//           <Techs />
//           <Portfolio />
//         </section>
//     );
//   }
function Main({
  loggedIn,
  moviesData,
  onMoviesFind,
  keyword,
  onSignOut,
  updateUser,
  onSaveMovie,
  onDeleteMovie,
  onMountAllSavedMovies,
  firstIterationMovies
}) {
  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to='/main'/>
      </Route>
      <Route exact path='/main'>
        <main className="main__container" id="main__container">
          <Promo />
          <AboutProject />
          <Techs />
          <Portfolio />
        </main>
      </Route>
      {/* {loggedIn ? */}
          <ProtectedRoute
            exact path="/movies"
            loggedIn={loggedIn}
            component={Movies}
            movies={moviesData}
            onMoviesFind={onMoviesFind}
            keyword={keyword}
            onSaveMovie={onSaveMovie}
            onDeleteMovie={onDeleteMovie}
            // onMountAllSavedMovies={onMountAllSavedMovies}
            firstIterationMovies={firstIterationMovies}
          /> 
          {/* : <Preloader/>} */}
          {/* {loggedIn ? */}
          <ProtectedRoute
            exact path="/saved-movies"
            loggedIn={loggedIn}
            component={Movies}
            // component={SavedMovies}
            movies={moviesData}
            onMoviesFind={onMoviesFind}
            keyword={keyword}
            onSaveMovie={onSaveMovie}
            onDeleteMovie={onDeleteMovie}
            firstIterationMovies={firstIterationMovies}
            // onMountAllSavedMovies={onMountAllSavedMovies}
          /> 
          {/* : <Preloader/>} */}
            {/* {loggedIn ? */}
            <ProtectedRoute
            exact path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            onSignOut={onSignOut}
            updateUser={updateUser}
        /> 
        {/* : <Preloader/>} */}
      <Route path="*">
        <Redirect to='/page_not_found'/>
      </Route>
    </Switch>
  );
}
  
export default Main;
  