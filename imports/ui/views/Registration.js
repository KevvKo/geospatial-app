import { Meteor } from 'meteor/meteor';
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";

export const Registration = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        if(e.target) { addUserAccount(e.target); };
    }

    const addUserAccount = ( form ) => {
        const { username, email, password } = form;

        if(!username) return;

        Meteor.call('insertUser', username.value, email.value, password.value );
        navigate('/')
    };

    return (
        <Container sx={{ height: '100%', display: 'flex', alignItems: 'center'}}>
            <Box 
                component="form" 
                onSubmit={ handleSubmit }
                sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    width: '25ch', 
                    border: '1px solid grey', 
                    padding: '20px', 
                    margin: 'auto',
                    border: 'solid 1px', 
                    borderColor: 'grey.500', 
                    borderRadius: '10px'
                }}>
                <TextField label="Username" name='username' required variant="outlined" sx={{ marginBottom: '10px'}}/>
                <TextField label="Email" required name='email' type="email" variant="outlined" sx={{marginBottom: '10px' }}/>
                <TextField label="Password" required  name='password' type="password" variant="outlined" sx={{marginBottom: '10px' }}/>
                <TextField label="confirm Password" required type="password" variant="outlined" sx={{marginBottom: '10px' }}/>
                <Button type='submit'>Sign up</Button>
                <Link to="../login">Already registered?</Link>
            </Box>
        </Container>
    )
}