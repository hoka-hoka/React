import React from 'react';
import ReactDOM from 'react-dom';
import App from './common';

document.addEventListener('DOMContentLoaded', () => {
  const cont = document.querySelector('#root');
  ReactDOM.render(<App />, cont);
});
