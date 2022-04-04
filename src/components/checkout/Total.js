import React from "react";
import accounting from "accounting";
import { Button, Link } from "@mui/material";
import {getBasketTotal} from "../../reducer";
import {useStateValue} from "../../StateProvider";
import {Link as RouteLink} from 'react-router-dom';

import './total.css';

const Total = () => {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="total">
            <h4>Cantidad de artículos: {basket?.length}</h4>
            
            <h4 className="totalMoney">Total a pagar:{accounting.formatMoney(getBasketTotal(basket))}</h4>
            <RouteLink to="/checkout">
                <button className="confirmButton">CONFIRMAR COMPRA</button>
            </RouteLink>
        </div>
    )
}
          
export default Total; 
