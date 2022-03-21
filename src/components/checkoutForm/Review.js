import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

import accounting from "accounting";
import {getBasketTotal} from "../../reducer";


import './review.css';

import { useStateValue } from '../../StateProvider';

export default function Review () {
    const [{basket}, dispatch] = useStateValue();
    const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
    const payments = [
      { name: 'Tipo de tarjeta', detail: 'Visa' },
      { name: 'Nombre en tarjeta', detail: 'Mr John Smith' },
      { name: 'Numero de tarjeta', detail: 'xxxx-xxxx-xxxx-1234' },
      { name: 'Fecha de vencimiento', detail: '04/2024' },
    ];
     
    function Check() {
        return (
            <React.Fragment>
                <ul>
                {basket?.map((item) => (
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <li key={item.id}>
                            <p>{item.name} - ${item.price} </p>
                        </li>
                    </Grid>
                ))}
                </ul>
            </React.Fragment>
        );
    }       

    return(
    <div>
      <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Productos
            </Typography>

            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
               <Check/>
            </Typography>
            <Typography>
            <h4 className="totalMoney">Total a pagar: {accounting.formatMoney(getBasketTotal(basket))}</h4>
            </Typography>

           
            </Grid>
            <Grid item container direction="column" xs={12} sm={6}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Forma de pago
            </Typography>
            <Grid container>
                {payments.map((payment) => (
                <React.Fragment key={payment.name}>
                    <Grid item xs={6}>
                    <Typography gutterBottom>{payment.name}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography gutterBottom>{payment.detail}</Typography>
                    </Grid>
                </React.Fragment>
                ))}
            </Grid>
            </Grid>
        </Grid>
    </div>
  );
}