import React from "react";
import accounting from "accounting";
import { Button } from "@mui/material";
import {getBasketTotal} from "../../reducer";
import {useStateValue} from "../../StateProvider";

import './total.css';

const Total = () => {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="total">
            <h4>Cantidad de artículos: {basket?.length}</h4>
            
            <h4 className="totalMoney">Total a pagar:{accounting.formatMoney(getBasketTotal(basket))}</h4>
            
            <Button className="confirmButton">Confirmar compra</Button>
        </div>
    )
}
          
export default Total; 