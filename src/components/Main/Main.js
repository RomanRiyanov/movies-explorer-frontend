import Promo from "../Promo/Promo.js";
import AboutProject from "../AboutProject/AboutProject.js";
import Techs from "../Techs/Techs.js";
import Portfolio from "../Portfolio/Portfolio.js";

import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Profile from "../Profile/Profile.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";

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
  loggedIn
}) {
  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to='/main'/>
      </Route>
      <Route exact path='/main'>
        <section className="main__container" id="main__container">
          <Promo />
          <AboutProject />
          <Techs />
          <Portfolio />
        </section>
      </Route>
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
      <Route path="*">
        <Redirect to='/page_not_found'/>
      </Route>
    </Switch>
  );
}
  
export default Main;
  