import React, { useEffect } from "react";
import { Meteor } from 'meteor/meteor';
import { useNavigate } from "react-router-dom";
import { useTracker } from 'meteor/react-meteor-data';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export const Index = () => {

    const navigate = useNavigate();
    const user = useTracker(() => Meteor.user());
    handleClick = () => {
        Meteor.logout();
    }

    useEffect(() => {
        if(!user) navigate('../login')
    });

    return (
        <div>
            <AppBar position="static">
                <Toolbar sx={{ height: '50px'}}>
                    <Button onClick={ handleClick } color='inherit' sx={{ marginLeft: 'auto'}}>Sign out</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}