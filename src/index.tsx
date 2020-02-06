import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.querySelector('.js-app'));
serviceWorker.unregister();