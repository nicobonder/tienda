import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import './rating.css';
import { useStateValue } from '../../StateProvider';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Link, useNavigate } from 'react-router-dom';
import Addreview from './addReview';

export default function Rating(product){
    const {id} =useParams()
    const navigate = useNavigate();
    const [userLogged, setuserLogged] = useState(false);
    firebase.auth().onAuthStateChanged((user) => {
        user ? setuserLogged(true) : setuserLogged(false)
    })

    return (
        <div className='RatingSection'>
            {
                userLogged ? (
                    <button onClick={() => navigate("/review", {product:id}) } className='submitOpinion' title='Escribe una opinión'>subí tu opinión</button>
                ) : (
                    <p className='needLogin' onClick={() => navigate("/signin")}>Hacé clic aquí para loguearte y poder dejar tu opinión.</p>
                ) 
            }
        </div>
    );
}


