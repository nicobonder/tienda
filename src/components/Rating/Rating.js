import React from 'react';
import IconButton from '@mui/material/IconButton';
import './rating.css';
import { useStateValue } from '../../StateProvider';

export default function Rating(product){
    return (
        <div className='RatingSection'>
            <form className='userQualification'>
                <div className='stars'>
                    <h3>Calificá este libro</h3>
                    <h4>¿Cuántas estrellas merece?</h4>
                    {Array(product.rating)
                        .fill()
                        .map((_, i) => (
                            <p>&#11088;</p>
                    ))}
                </div>
                <div className='opinion'>
                    <h4>Si compraste este libro, decinos qué te pareció</h4>
                    <textarea/>
                </div>
                <button className='submitOpinion'>Enviar</button>
            </form>
        </div>
    );
}



