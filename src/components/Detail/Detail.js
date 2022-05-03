import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

export default function Detail( props ) {
    const {id} =useParams()
    const API_URL = 'http://localhost:3500/arrayProducts';
    const [arrayProducts, setArrayProducts] = useState([]);
    const [product, setProduct] = useState(null)
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { name, author, regionTrip, image, price, rating, description, file, authorImg, authorDescription, pages, language, published} = props;
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

    useEffect(() => {
        const productFound = products.filter(e => e.id === +id)
        if(productFound.length > 0) {
            console.log(productFound)
            setProduct(productFound[0])
        }
        // const fetchItems = async () => {
        //     try {
        //         const response = await fetch(API_URL);
        //         console.log(response)
        //         if(!response.ok) throw Error('Hubo un error en los datos solicitados');
        //         const listItems = await response.json();
        //         setArrayProducts(listItems);
        //         setFetchError(null);
        //     } catch (err) {
        //         setFetchError(err.stack);
        //     } finally {
        //         setIsLoading(false);
        //     }
        // }
        // setTimeout(() => { //esto despues puedo borrarlo, es para simular el tiempo de carga
        //    (async () => await fetchItems())();
        // }, 2000)

    }, [])
    
    return (
        <div className='detailComponent'>
            <div className='topSection'>
       {/* {isLoading && <p>Cargando tu produco...</p>} */}
                {/* {fetchError && <p style={{color: "black"}}>{`Error: ${fetchError}`}</p>} */}
                <div className='leftColumn'>
                    <Link to="/" className="btnBack">
                        <ArrowBackIosIcon /> Volver
                    </Link>
                    <div className='freeSample'>
                        <h4>{product?.freeSample}</h4>
                        <img src={product?.image} />
                    </div>
                    <div className='aboutAuthor'>
                        <h3>¿Quién es el autor?</h3>
                        <div className='authorPresentation'>
                            <img src={product?.authorImg} />
                            <h4>{product?.author}</h4>
                        </div>
                        <p>{product?.authorDescription}</p>
                    </div>
                </div>

                <div className='mainSide'>
                    <h1>{product?.name}</h1>
                    <p>{product?.description}</p>
                    
                    <div className='bottomSection'>
                        <div className='smallDetails'>
                            <div className='pages'>
                                <p>Cantidad de páginas</p>
                                <Filter1Icon />
                                <p className='boldText'>{product?.pages}</p>
                            </div>
                            <div className='language'>
                                <p>Idioma</p>
                                <LanguageIcon />
                                <p className='boldText'>{product?.language}</p>
                            </div>
                            <div className='published'>
                                <p>Fecha de publicación</p>
                                <CalendarMonthIcon />
                                <p className='boldText'>{product?.published}</p>
                            </div>
                        </div>
                    </div>
                    <div className='buyColumn'>
                        <h4>Agregalo a tu carrito</h4>
                        <IconButton onClick={addToBasket} aria-label="add to Cart">
                            <AddShoppingCart className='buyButton' color='#fff' fontSize='large' />
                        </IconButton>
                        <h3>{accounting.formatMoney(product?.price)}</h3>
                    </div>
            
                </div>
            </div>
                
                <div className='commentSection'>
                    <Rating/>
                </div>
        </div>
    );
}

