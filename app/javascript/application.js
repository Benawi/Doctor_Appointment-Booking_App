// Entry point for the build script in your package.json
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';



ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,

  document.getElementById('root'),
);

