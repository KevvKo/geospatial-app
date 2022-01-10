import React from 'react';
import { Meteor } from 'meteor/meteor';
import  { Index } from './views/Index';
import  { Login }  from './views/Login';
import  { Registration }  from './views/Registration';
import {
  BrowserRouter as Router,
  Route, 
  Routes
} from "react-router-dom";

export const App = () => {

  return(
    <Router>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="registration" element={<Registration />}></Route>          
      </Routes>
    </Router>
  )
};
