import { Meteor } from 'meteor/meteor';
import React from 'react';

export const Login = () => {
    return (
        <form>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username"/>
            <label htmlFor="password">Password:</label>
            <input name="password" type="password"/>
        </form>
    )
}