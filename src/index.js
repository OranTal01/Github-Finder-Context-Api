import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GithubState from '../src/context/github/GithubState';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <GithubState>
      <App />
    </GithubState>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
