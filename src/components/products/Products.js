import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Product from '../product/Product'
import './products.css'
import products from '../../productData';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  
 
}));

export default function Products() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid className='containerProducts' container spacing={3}>
        
        {
            products.map(product => (
                <Grid item xs={12} sm={6} md={4} xl={3} >
                    <Product key={product.id} product={product} />
                </Grid>
            ))
        }
        
      </Grid>
    </Box>
  );
}
