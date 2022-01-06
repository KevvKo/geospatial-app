import { Meteor } from 'meteor/meteor';
import React from 'react';

export const Login = () => {
    return (
        <form>
            <label for="username">Username:</label>
            <input type="text" name="username"/>
            <label for="password">Password:</label>
            <input name="password" type="password"/>
        </form>
    )
}