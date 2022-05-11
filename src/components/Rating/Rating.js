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

//Haciendo rating y addReview todo junto
import './addReview.css';
import toast, { Toaster } from 'react-hot-toast';
//Rating
import { Rating as RatingApp } from 'react-simple-star-rating';
import { Button, TextareaAutosize, TextField } from '@mui/material';
import { ShowChart } from '@material-ui/icons';
import { initialState } from '../../reducer';

const notify = () => toast('Debes darle una puntuación con las estrellas');

export default function Rating(props){
    const {id} =useParams()
    const navigate = useNavigate();
    const initialStateValues = {
        title: "",
        review: "",
        loading: "",
        rating: 0,
      };
      const [rating, setRating] = useState(null) // initial rating value

    const [userLogged, setuserLogged] = useState(false);
    firebase.auth().onAuthStateChanged((user) => {
        user ? setuserLogged(true) : setuserLogged(false)
    })
    const [values, setValues] = useState(initialStateValues);

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addNewComment(values);
        setValues({...initialStateValues})
    };
    // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // Some logic
  }

  const handleInputchange = (e) => {
    const {name, value} = e.target;
    setValues({...values, [name]: value})
  };

  const addReview = () => {
    if (!ValidForm()){
        return
    }
  }

  const ValidForm = () =>{
     // setTitleError(null)
      //setReviewError(null)
      let isValid = true
      if(!rating) { //si el usuario no elije rating
          toast.error('Debes darle una puntuación con las estrellas');
          isValid=false
      }
      return isValid
  }

    return (
        <div className='RatingSection'>
           
        <div className='addReview'>
            <form className='formReview' onSubmit={handleSubmit}>
            <div className='ratingStars'>
                <h3>Calificá este libro</h3>
                <h4>¿Cuántas estrellas merece?</h4>
                <RatingApp
                    onClick={handleRating}
                    ratingValue={rating}
                    value={values.rating}
                    name='rating'
                    size={35}
                    label
                    transition
                    fillColor='#ffff00'
                    emptyColor='gray'
                    className='stars' // Will remove the inline style if applied
                    allowHalfIcon
                    //en su version hay onFinishRatin={{value}} =>setRating(value) es una prop de la libreria q el uso
                />
                {/* Use rating value */}
                {rating}
        
            </div>
            <div className='comments'>
                <TextField
                placeholder='Titulo'
                className='commentTitle'
                required={true}
                name='title'
                value={values.title}
                  onChange={handleInputchange}
                    //error={titleError}
                    label="Título"
                    //helperText={titleMessage}
                    variant="outlined"
                />
                <TextareaAutosize
                minRows={10}
                className='commentDescription'
                placeholder='¿Qué te pareció el libro?'
                required={true}
                name='review'
                value={values.review}
                  onChange={handleInputchange}
                    //error={reviewError}
                    label="Comentario"
                    //helperText={reviewMessage}
                    variant="outlined"
                />
                 {
                userLogged ? (
                    <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={addReview}
                    className='reviewButton'
                    title='Escribe una opinión'>subí tu opinión
                    </Button>
                ) : (
                    <p className='needLogin' onClick={() => navigate("/signin")}>Hacé clic aquí para loguearte y poder dejar tu opinión.</p>
                ) 
            }
               
            </div>
            {notify}
        </form>
        </div>
        </div>
    );
}