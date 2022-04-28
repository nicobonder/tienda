import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import logoTienda from '../../images/tiendaLogo.png';

import { purple, lightBlue } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

import './navbar.css';
import { Badge, Button } from '@mui/material';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useNavigate } from 'react-router-dom';

import { useStateValue } from '../../StateProvider';
import SignIn from '../register/Signin';
import { auth } from '../../firebase';
import { actionTypes } from '../../reducer';

let theme = createTheme();

const deepPurple = purple[500];
const deepBlue = lightBlue[500];
const softBlue = lightBlue[200];
const lightPurple = purple[150];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '7rem',
    marginLeft: '-1.5rem'
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '4ch',
      '&:focus': {
        width: '4ch',
      },
    },
  },
}));

export default function Navbar() {
  const [{basket, user}, dispatch] = useStateValue();
  const navigate = useNavigate();
const handleAuth = ()=>{
  if (user){
    auth.signOut();
    dispatch({
      type: actionTypes.EMPTY_BASKET,
      basket: [],
    });
    dispatch({
      type: actionTypes.SET_USER,
      user: null,
    });
    navigate("/")
  }
}
   /* const classes = useStyles;*/
  return (
    <div className='navbar'> 
      <Box sx={{ flexGrow: 1, 
                  }}
                  >
        <AppBar position="fixed">
          <Toolbar className='toolBar'>
            <div className='menuLeft'>
            {/* <IconButton className='buttonBurguer'
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
                </IconButton> */}
            
            <Link className='linkLogo' to='/' >
                <IconButton className='logoContainer' sx={{ padding: 0}}>
                    <img className='logoTienda' src={logoTienda} />
                </IconButton>
              </Link>
            </div>

            <div className='menuRight'>
            <h4 className='welcome'>
              Bienvenid@ {user ? user.email : ""}!
              </h4>
            <Link to='/signin' className='linkLogin'>
            <div>
                <button className='loginButton' onClick={handleAuth}>{user ? "Desconectate" : "Logueate"}</button>
            </div>
            </Link>
          <Link to="/checkout-page" className='linkLogout'>
            <IconButton className='shoppingCart' sx={{ marginRight: 8 }}>
            <Badge badgeContent={basket?.length} color="secondary" className='badgeCart' sx={{ margin: 0}}>
                    <ShoppingCart fontSize='large' className='cartButton' />
                </Badge>
            </IconButton>
          </Link>
            <Search >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase 
                placeholder=""
                inputProps={{ fontSize:'medium', 'aria-label': 'search' }}
              />
            </Search>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
