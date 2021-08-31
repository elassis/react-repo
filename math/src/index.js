import React from 'react';
import ReactDOM from 'react-dom';
import MathContainer from "./components/MathContainer"
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <MathContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



