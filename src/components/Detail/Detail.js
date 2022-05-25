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
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import Filter1Icon from '@mui/icons-material/Filter1';
import LanguageIcon from '@mui/icons-material/Language';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Alert } from '@mui/material';
import { Button } from '@mui/material';

//toastify
import { toast } from 'react-toastify';

//Componente Rating
import Rating from '../Rating/Rating';
//Array de productos
import products from '../../productData';
//importo firebase
import { db } from '../../firebase';


export default function Detail(props) {
    const [{user}] = useStateValue();
    const addNewComment = async (commentObjet) => { //commentObject seria el objeto que viene del form
        try{
            if (currentId === "") {
                await db.collection('comments').doc().set(commentObjet);
                toast('Nuevo comentario agregado', {
                    type: "success",
                    autoClose: 2000,
                    position: "top-center",
                });
            } else {
                await db.collection('comments').doc(currentId).update(commentObjet);
                toast('Tu comentario se actualizó', {
                    type: "info",
                    autoClose: 2000,
                    position: "top-center",
                });
                setCurrentId('');//queda en blanco para que ya no hace mas peticiones
            }
        } catch (error){
            console.log(error);
        }
    }

    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const { name, author, regionTrip, image, price, rating, description, file, authorImg, authorDescription, pages, language, published } = props;
    const [{ basket }, dispatch] = useStateValue();
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

    const [comments, setComments] = useState([]);
    const [currentId, setCurrentId] = useState('');
    const getComments = async () => {
        db.collection('comments').onSnapshot((querySnapshot) => {
            const docs = []; //docs y onSnapshot pertenecen a fiebase
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setComments(docs); //para asignarlo al estado
        });
    };

    const deleteComment = async (id) => {
        if (window.confirm("seguro que queres borrar esto?"))
        //(<Alert onClose={() => {}} severity="warning">¿Seguro que querés eliminar tu comentario?</Alert>
        {
           await db.collection('comments').doc(id).delete();
           toast('Comentario eliminado', {
            type: "warning",
            autoClose: 2000,
            position: "top-center",
           })
        }
    }
  
    useEffect(() => {
        getComments();
    }, []);


    useEffect(() => {
        const productFound = products.filter(e => e.id === +id)
        if (productFound.length > 0) {
            console.log(productFound)
            setProduct(productFound[0])
        }

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
                <Rating {...{addNewComment, currentId, comments }} />
            </div>
            <div className='allComments'>
                <h3>Leer otras opiniones</h3>
                {comments.map(comment => (
                    <div className="showMap" key={comment.id}>
                        <div className='showComment'>
                            <div className='showTitle'>
                                <p>{user.email}</p>
                                <h4>{comment.title}</h4>
                                <div className="specialIcons">
                                    <IconButton aria-label="delete" onClick={() => deleteComment(comment.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton aria-label="edit" onClick={() => setCurrentId(comment.id)}>
                                        <EditIcon />
                                    </IconButton>
                                </div>
                            </div>
                            <p>{comment.review}</p>
                            <p>{comment.rating}</p>
                        </div>
                    </div>
                    )
                )}
            </div>
        </div>
    );
}

