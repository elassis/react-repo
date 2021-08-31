import React from "react";
import App from "../App.js";
import Navbar from "./Navbar.js";
import Quote from "./Quote.js";

import { Route, Switch } from "react-router-dom"

const MathContainer = () =>{
  return( 
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/">
        <div className="hp-container">
          <h1 className="title-page">This is the Home Page</h1>  
          <p className="hp-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat leo eget tristique efficitur.
          Integer sagittis interdum rhoncus. Praesent malesuada elit vitae tellus volutpat lobortis.
          Donec in sapien viverra, mattis magna non, rutrum enim.Donec sollicitudin in dui a consequat. 
          Fusce vitae tristique sapien, eget mattis purus. Ut quis accumsan turpis. Nunc mi est, finibus bibendum 
          lectus quis, varius condimentum lectus. Pellentesque in sapien sed tortor vulputate feugiat. 
          Praesent semper posuere orci, et eleifend neque tempor eu.</p><br />

          <p className="hp-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat leo eget tristique efficitur.
          Integer sagittis interdum rhoncus. Praesent malesuada elit vitae tellus volutpat lobortis.
          Donec in sapien viverra, mattis magna non, rutrum enim.Donec sollicitudin in dui a consequat. 
          Fusce vitae tristique sapien, eget mattis purus. Ut quis accumsan turpis. Nunc mi est, finibus bibendum 
          lectus quis, varius condimentum lectus. Pellentesque in sapien sed tortor vulputate feugiat. 
          Praesent semper posuere orci, et eleifend neque tempor eu.</p>
           
        </div>     
      </Route>
      <Route path="/calculator">
        <App />
      </Route>
      <Route path="/quote">
        <Quote/>
      </Route>
    </Switch>
    </>
  )
}

export default MathContainer;