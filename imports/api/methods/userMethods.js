import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
    'insertUser'( username, email, password ){

        if(!username || !email || !password ) throw new Meteor.Error('Missing data');

        if(!Accounts.findUserByUsername){username}{
            Accounts.createUser({
                username: username,
                email: email,
                password: password
            })
        }
    }
})