import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';
import CheckoutPage from './components/checkout/CheckoutPage';
import Detail from './components/Detail/Detail';
import SignIn from './components/register/Signin';
import SignUp from './components/register/SignUp';
import Checkout from './components/checkoutForm/Checkout';

import { purple, lightBlue, red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {BrowserRouter as Router, BrowserRouter, Route, Routes} from "react-router-dom";
import { useEffect } from 'react';
import { auth } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

//toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const theme = createTheme({
  palette: {
    primary: {
      main: lightBlue[500],
    },
    alert: {
      main: purple[400],
    },
    secondary: {
      main: red[400],
    },
  },
});

function App() {
  const [{user}, dispatch] = useStateValue();
  
  useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
      console.log(authUser);
      if (authUser){
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        })
      }
    })
    
  }, [])
    

  return <ThemeProvider theme={theme}>
            <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>      
                <Route path="/checkout-page" element={<CheckoutPage/>} />
                <Route path="/" element={<Products />} /> 
                <Route path="/signin" element={<SignIn />} /> 
                <Route path="signup" element={<SignUp />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/product/:id" element={<Detail />} />
              
            </Routes>
        </BrowserRouter>
        <ToastContainer />
      </div>
  </ThemeProvider>;
}

export default App;
                
       
