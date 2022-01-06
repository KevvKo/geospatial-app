import { Meteor } from 'meteor/meteor';
import React from 'react';

export const Registration = () => {
    return (
        <form>
            <label for="username">Username:</label>
            <input type="text" name="username"/>
            <label for="email">Email:</label>
            <input type="text" name="email"/>
            <label for="username">Password:</label>
            <input name="password" type="password"/>
        </form>
    )
}