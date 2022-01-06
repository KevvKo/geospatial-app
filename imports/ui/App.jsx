import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Login } from './views/Login';
import { useTracker } from 'meteor/react-meteor-data';

export const App = () => {

  const user = useTracker(() => Meteor.user())
  return(
    <div>
      { user ? (
        <h1>Welcome</h1>
      )
      : (
        <Login />
      )
      }
    </div>
  )
};
