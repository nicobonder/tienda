import Product from './components/product/Product';
import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';
import CheckoutPage from './components/checkout/CheckoutPage';
import CheckoutCard from './components/checkout/CheckoutCard'

import { purple, lightBlue, red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import {BrowserRouter as Router, BrowserRouter, Route, Routes} from "react-router-dom";


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
  return <ThemeProvider theme={theme}>
            <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>      
                <Route path="/checkout-page" element={<CheckoutPage/>} />
                <Route path="/" element={<Products />} />
            </Routes>
        </BrowserRouter>
      </div>
  </ThemeProvider>;
}

export default App;
                
       
