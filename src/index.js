import React from 'react';
import ReactDOM from 'react-dom/client';
import {Router} from 'react-router';
import {createBrowserHistory} from "history";

import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './components/App/App';

export const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode> */}
  </BrowserRouter>
);

// {/* <BrowserRouter>
// <React.StrictMode>
//   <App />
// </React.StrictMode>
// </BrowserRouter> */}



// {/* <Router history={history}>
// {/* <React.StrictMode> */}
//   <App />
// {/* </React.StrictMode> */}
// </Router> */}