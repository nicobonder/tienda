import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import products from '../../productData';
import Product from '../product/Product';
import CheckoutCard from './CheckoutCard';
import Total from './Total';

import './checkoutPage.css';

import { useStateValue } from '../../StateProvider';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const CheckoutPage = () => {
    const [{basket}, dispatch] = useStateValue();

    function FormRow() {
        return (
            <React.Fragment>
                {basket?.map((item) => (
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <CheckoutCard key={item.id} product={item} />
                    </Grid>
                ))}
            </React.Fragment>
        );
    }

    return(
       <div>
           <Grid container spacing={3}>
                <Grid className='yourCart' item xs={12}>
                    <Typography align='center' gutterBottom variant='h4' >
                        Tu carrito de compras   
                    </Typography>    
                </Grid>
                <Grid item xs={12} sm={8} md={9} container spacing={2}>
                    <FormRow />
                </Grid>   
                <Grid item xs={12} sm={4} md={3}>
                    <Typography align='center' gutterBottom variant='h4' >
                        <Total />
                    </Typography>
                </Grid>
            </Grid>
       </div>
   )
}

export default CheckoutPage;