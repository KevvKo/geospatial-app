import React, { useEffect } from "react";
import { Meteor } from 'meteor/meteor';
import { useNavigate } from "react-router-dom";
import { useTracker } from 'meteor/react-meteor-data';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { MapContainer } from "./Map";
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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', height: '100%'}}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Button onClick={ handleClick } color='inherit' sx={{ marginLeft: 'auto'}}>Sign out</Button>
                </Toolbar>
            </AppBar>
            <div style={{ height: '100%'}}>
                <MapContainer />
            </div>
        </div>
    )
}