import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import {Provider} from "react-redux";
import store from './app/store'
import LoginView from "./app/views/LoginView/view";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <Router>
            <Route exact path={'/'} component={App}>
                <Route exact path={'/'} component={LoginView}/>
            </Route>
        </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
