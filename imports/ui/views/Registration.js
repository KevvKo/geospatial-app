import { Meteor } from 'meteor/meteor';
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";

export const Registration = () => {
    return (
        <Container sx={{ height: '100%', display: 'flex', alignItems: 'center'}}>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', width: '25ch', border: '1px solid grey', padding: '20px', margin: 'auto'}}>
                <TextField label="Username" required variant="outlined" sx={{ marginBottom: '10px'}}/>
                <TextField label="Email" required type="email" variant="outlined" sx={{marginBottom: '10px' }}/>
                <TextField label="Password" required type="password" variant="outlined" sx={{marginBottom: '10px' }}/>
                <TextField label="confirmPassword" required type="password" variant="outlined" sx={{marginBottom: '10px' }}/>
                <Link to="../login">Already registered?</Link>
            </Box>
        </Container>
    )
}