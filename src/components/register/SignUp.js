import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {Link as RouteLink, useNavigate} from 'react-router-dom';
import { auth } from '../../firebase';

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
    const [nameMessage, setNameMessage] = useState("");
    const [lastNameMessage, setLastNameMessage] = useState("");
    const [emailMessage, setEmailMessage] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");
    const [nameError, setNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleSubmit = (event) => {
      event.preventDefault()
      setNameError(false)
      setLastNameError(false)
      setEmailError(false)
      setPasswordError(false)
      
      if ((name == '') || (lastName == '') || (email == '') || (password == '')){
        return(alert ('Alguno de los datos es incorrecto o te falta información'))
      }else if(name.length<3){
          return(alert ("El nombre debe tener al menos 3 letras"))
      }else if(lastName.length<2){
        return(alert ("El apellido debe tener al menos 2 letras"))
    }  
      
        auth.createUserWithEmailAndPassword(email, password).then((auth)=>{
        console.log(auth);
        if (auth){
            navigate("/"); 
        }
     }).catch(err=>alert('Alguno de los datos es incorrecto o te falta información'))
 }
  
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
                  required={true}
                  value={name}
                  onChange={(e) =>{
                    setName(e.target.value);
                    if(name.length<3){
                      setNameError(true);
                      setNameMessage("El nombre debe tener al menos 3 letras");
                      
                    }else{
                      setNameError(false);
                      setNameMessage("");
                    }
                  }}
                  error={nameError}
                  label="Nombre"
                  helperText={nameMessage}
                  variant="outlined"
                  
                />

              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                 value={lastName}
                 onChange={(e) =>{
                  setLastName(e.target.value);
                  if(lastName.length<2){
                    setLastNameError(true);
                    setLastNameMessage("El apellido debe tener al menos 2 letras");
                  }else{
                    setLastNameError(false);
                    setLastNameMessage("");
                  }
                }}
                error={lastNameError}
                label="Apellido"
                helperText={lastNameMessage}
                variant="outlined"
                required
                />

              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={email}
                  onChange={(e) =>{
                    setEmail(e.target.value);
                    if(email.length===0){
                      setEmailError(true)
                      setEmailMessage("Por favor, ingresá un email.");
                    }else if(!/\S+@\S+\.\S+/.test(email)){
                      setEmailMessage("El email es inválido.");
                    }else{
                      setEmailError(false);
                      setEmailMessage("");
                    }
                  }}
                  required
                  fullWidth
                  error={emailError}
                label="Email"
                helperText={emailMessage}
                variant="outlined"
                />

              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="password"
                  value={password}
                  onChange={(e) =>{
                    setPassword(e.target.value);
                    if(password.length<6){
                      setPasswordError(true);
                      setPasswordMessage("La contraseña debe tener al menos 6 caracteres.");
                    }else{
                      setPasswordError(false);
                      setPasswordMessage("");
                    }
                  }}
                  fullWidth
                  required
                  error={passwordError}
                  label="Contraseña"
                  helperText={passwordMessage}
                  variant="outlined"
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
              onClick={() => ('You clicked on me')}
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





/*      if (name == ''){
        setNameError(true)
      }
      if (lastName == ''){
        setLastNameError(true)
      }
      if (email == ''){
        setEmailError(true)
      }
      if (password == ''){
        setPasswordError(true)
      } */

