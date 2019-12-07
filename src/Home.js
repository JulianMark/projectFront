import React, { useState } from 'react';
import useStyles from './Styles'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function SignIn() {
    const classes = useStyles();
    const Home = props => {
        const { userId } = props.match.params
    }
    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Typography component="h1" variant="h5">
          Nice! = userId
        </Typography>
        </Container>
    );
    
    
}