import React from 'react';
import { useState, useRef } from 'react';
import './addReview.css';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
//Rating
import { Rating } from 'react-simple-star-rating';

const notify = () => toast('TEXTO QUE APARECE EN LA TOAST');

const AddReview = (product) => {
    const {id} =useParams()
    const [title, setTitle] = useState(""); //el estado original es que el usuario no puso titulo
    const [errorTitle, setErrorTitle] = useState(null); //el estado original es que el usuario no cometio error con el titulo
    const [review, setReview] = useState(""); //el estado original es que el usuario no puso su comentario
    const [errorReview, setErrorReview] = useState(null); //el estado original es que el usuario no cometio error en el comentario
    const [loading, setLoading] = useState(false); //false porque no quiero que arranque el loading por default sino cdo yo quiera
    const [rating, setRating] = useState(0) // initial rating value
 

    // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // Some logic
  }

    return (
        <div className='addReview'>
            <div className='ratingStars'>
                <h3>Calificá este libro</h3>
                <h4>¿Cuántas estrellas merece?</h4>
                <Rating
                    onClick={handleRating}
                    ratingValue={rating}
                    size={35}
                    label
                    transition
                    fillColor='#ffff00'
                    emptyColor='gray'
                    className='stars' // Will remove the inline style if applied
                    allowHalfIcon
                />
                {/* Use rating value */}
                {rating}
        
            </div>
        </div>
    );
}

export default AddReview;
