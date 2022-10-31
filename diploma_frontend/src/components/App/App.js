// import logo from './logo.svg';
// import './App.css';
import {
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import Main from "../Main/Main";
import Movies from '../Movies/Movies'


function App() {
  return (
    <div className='body'>
      <div className='page'>
      <Switch>
        <Route exact path='/main'>
          <Main></Main>
        </Route>
        <Route exact path='/movies'>
        <Movies></Movies>
        </Route>
      </Switch>
      </div>
    </div>
  );
}

export default App;
