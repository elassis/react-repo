import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MathContainer from './components/MathContainer';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MathContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
