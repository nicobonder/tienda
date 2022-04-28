import React from 'react';
import accounting from 'accounting'; //para que el precio se muestre con formato de moneda
import { useStateValue } from '../../StateProvider'; //
import { actionTypes } from '../../reducer'; //
import './detail.css';
import { Link } from "react-router-dom";
//Material UI
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IconButton from '@mui/material/IconButton';
import { AddShoppingCart } from '@material-ui/icons';
import Filter1Icon from '@mui/icons-material/Filter1';
import LanguageIcon from '@mui/icons-material/Language';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
//Componente Rating
import Rating from '../Rating/Rating';
//Para probar si funciona hardcodeado
import anecdotas from '../../images/anecdotas.jpg'
import NicoBonder from '../../images/NicoBonder.jpg';
import products from '../../productData';

export default function Detail( products ) {
    const { id, name, author, regionTrip, image, price, rating, description, file, authorImg, authorDescription, pages, language, published } = products;
    const [{basket}, dispatch] = useStateValue();
  
    const addToBasket = () => {
        dispatch({
          type: actionTypes.ADD_TO_BASKET,
          item: {
            id,
            name,
            author,
            regionTrip,
            price,
            rating,
            image,
            description,
            file, authorImg, authorDescription, pages, language, published
          }
        })
      }
    
  
    return (
        <div className='detailComponent'>
            <div className='topSection'>
                <div className='leftColumn'>
                    <Link to="/" className="btnBack">
                        <ArrowBackIosIcon /> Volver
                    </Link>
                    <div className='freeSample'>
                        <h3>Lee las primeras páginas</h3>
                        <img src={products.image} />
                    </div>
                    <div className='aboutAuthor'>
                        <h3>¿Quién es el autor?</h3>
                        <div className='authorPresentation'>
                            <img src={NicoBonder} />
                            <h4>Nico Bonder</h4>
                        </div>
                        <p>Nico escribe cuentos hace más de 15 años y cuando comenzó a viajar sintió la necesidad de narrar las historias que atravezaba en sus viajes. Así nacieron sus primeras crónicas de viajes, en las que muestra los hechos más interesantes del viaje que hizo junto a su pareja Lu por Sudamérica. Sus escritos son directos, rápidos y cargados de acciones.</p>
                    </div>
                </div>

                <div className='mainSide'>
                    <h1>Recorriendo Sudamerica</h1>
                    <p>Te cuento lo mejor (y lo peor) que vivimos durante nuestro recorrido de casi 31.000 kilómetros por 10 países de Sudamérica durante 195 días, y aunque en un viaje, como en la vida, no todo es felicidad y buenos momentos, vas a poder vivir la emoción que nosotros sentíamos cada vez que nuestros niños interiores corrían libres delante nuestro.</p>
                    
                    <div className='bottomSection'>
                        <div className='smallDetails'>
                            <div className='pages'>
                                <p>Cantidad de páginas</p>
                                <Filter1Icon />
                                <p className='boldText'>150</p>
                            </div>
                            <div className='language'>
                                <p>Idioma</p>
                                <LanguageIcon />
                                <p className='boldText'>Español</p>
                            </div>
                            <div className='published'>
                                <p>Fecha de publicación</p>
                                <CalendarMonthIcon />
                                <p className='boldText'>15/05/2020</p>
                            </div>
                        </div>
                    </div>
                    <div className='buyColumn'>
                        <h4>Agregalo a tu carrito</h4>
                        <IconButton onClick={addToBasket} aria-label="add to Cart">
                            <AddShoppingCart className='buyButton' color='#fff' fontSize='large' />
                        </IconButton>
                        <h3>{accounting.formatMoney(price)}</h3>
                    </div>
            
                </div>
            </div>
                
                <div className='commentSection'>
                    <Rating/>
                </div>
        </div>
    );
}

