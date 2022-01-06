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
import { useTracker } from 'meteor/react-meteor-data';

export const App = () => {
  const user = useTracker(() => Meteor.user())
  return(
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="registration" element={<Registration />}></Route>          
        </Routes>
      </div>
    </Router>
  )
};
