import React, { useState } from 'react';
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

export default function Products(product) {
  const [data, setData]=useState(products);
  const filterResult=(catItem)=>{
    const result=products.filter((curData)=>{
        return curData.regionTrip===catItem;
    });
    setData(result);
    console.log(result);
}

  return (
    <Box className='home' sx={{ flexGrow: 1 }}>
      <div className='filters'>
            <h4>Regiones</h4>
            <div className='regionFilter'>
                <button className='regionButton' onClick={() => filterResult('Sudamérica')}>Sudamérica</button>
                <button className='regionButton' onClick={() => filterResult('Norte América')}>Norte América</button>
                <button className='regionButton' onClick={() => filterResult('Australia')}>Australia</button>
                <button className='regionButton' onClick={() => filterResult('Oceanía')}>Oceanía</button>
                <button className='regionButton' onClick={() => filterResult('Argentina')}>Argentina</button>
                <button className='regionButton' onClick={() => filterResult('Mundo')}>Mundo</button>
                <button className='regionButton' onClick={() => filterResult('Europa')}>Europa</button>
                <button className='regionButton' onClick={() => filterResult('Asia')}>Asia</button>
                <button className='regionButton' onClick={() => filterResult('Sudeste Asiático')}>Sudeste Asiático
                </button>
                <button className='regionButton' onClick={() => filterResult('África')}>África</button>
                <button className='regionButton' onClick={() => setData(products)}>Todas</button>
            </div>
  </div>

      <Grid className='containerProducts' container spacing={3}>
        {
            data.map(product => (
                <Grid item xs={12} sm={6} md={4} xl={3} >
                    <Product key={product.id} product={product} />
                </Grid>
            ))
        }
      </Grid>
    </Box>
  );
}
