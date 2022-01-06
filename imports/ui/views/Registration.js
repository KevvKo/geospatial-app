import { Meteor } from 'meteor/meteor';
import React from 'react';

export const Registration = () => {
    return (
        <form>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username"/>
            <label htmlFor="email">Email:</label>
            <input type="text" name="email"/>
            <label htmlFor="password">Password:</label>
            <input name="password" type="password"/>
        </form>
    )
}