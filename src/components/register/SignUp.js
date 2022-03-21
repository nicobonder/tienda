import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {Link as RouteLink, useNavigate} from 'react-router-dom';
import { auth } from '../../firebase';

import validation from './validation';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
    const [name,setName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);


    const signup = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth)=>{
           console.log(auth);
           if (auth){
               navigate("/");
           }
        }).catch(err=>alert(err.message))
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      name: data.get('name'),
      lastName: data.get('lastName'),
    });
  };

 
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registrate
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={name}
                  onChange={e=>setName(e.target.value)}
                  autoComplete="given-name"
                  name="Nombre"
                  required
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  autoFocus
                />

              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                 value={lastName}
                 onChange={e=>setLastName(e.target.value)}
                  required
                  fullWidth
                  id="lastName"
                  label="Apellido"
                  name="Apellido"
                  autoComplete="Apellido"
                />

              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={email}
                  onChange={e=>setEmail(e.target.value)}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />

              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={password}
                  onChange={e=>setPassword(e.target.value)}
                  required 
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Me gustaría recibir emails con información de ofertas y nuevos productos."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className="submit"
              onClick={signup}
            >
              Registrate
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <RouteLink to='/signin'>
                  Ya tenés una cuenta? Logueate
                </RouteLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}