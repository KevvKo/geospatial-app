import { Meteor } from 'meteor/meteor';
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from "react-router-dom";
import { Button } from '@mui/material';

export const Login = () => {

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()

        const { username, password } = e.target

        if( !username || !password ) return;

        if( username.value && password.value ){
            console.log(username.value)
            Meteor.loginWithPassword( username.value, password.value );
            navigate('/')
        }
    }
    return (
        <Container sx={{ height: '100%', display: 'flex', alignItems: 'center'}}>
            <Box component="form" onSubmit={ handleSubmit } sx={{ display: 'flex', flexDirection: 'column', width: '25ch', border: '1px solid grey', padding: '20px', margin: 'auto'}}>
                <TextField label="Username" name='username' required variant="outlined" sx={{ marginBottom: '10px'}}/>
                <TextField label="Password" name='password' required type="password" variant="outlined" sx={{marginBottom: '10px' }}/>
                <Button type='submit'>Sign in</Button>
                <Link to="../registration">Not registered yet?</Link>
            </Box>
        </Container>
    )
}