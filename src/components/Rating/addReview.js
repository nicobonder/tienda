/****NO ESTOY USANDO ESTE ARCHIVO ****/
/****NO ESTOY USANDO ESTE ARCHIVO ****/
/****NO ESTOY USANDO ESTE ARCHIVO ****/


import React from 'react';
import { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
//Rating
import { Rating } from 'react-simple-star-rating';
import { Button, TextareaAutosize, TextField } from '@mui/material';
import { ShowChart } from '@material-ui/icons';
import { initialState } from '../../reducer';

const notify = () => toast('Debes darle una puntuación con las estrellas');

const AddReview = (props) => {
  
    const {id} =useParams()
    const initialStateValues = {
      title: "",
      review: "",
      loading: "",
      rating: "",
    };
    const [rating, setRating] = useState(null) // initial rating value
   /* const [title, setTitle] = useState(""); //el estado original es que el usuario no puso titulo
    const [titleMessage, setTitleMessage] = useState("");
    const [titleError, setTitleError] = useState(false); //el estado original es que el usuario no cometio error con el titulo
    const [review, setReview] = useState(""); //el estado original es que el usuario no puso su comentario
    const [reviewError, setReviewError] = useState(null); //el estado original es que el usuario no cometio error en el comentario
    const [reviewMessage, setReviewMessage] = useState("");
    const [loading, setLoading] = useState(false); //false porque no quiero que arranque el loading por default sino cdo yo quiera
 */
    const [values, setValues] = useState(initialStateValues);

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(values);
    }
    // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // Some logic
  }

  const handleInputchange = (e) => {
    const { name, value } = e.target;
    setValues({...values, [name]: value})
    props.addNewComment();
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
        <div className='addReview'>
            <form className='formReview' onSubmit={handleSubmit}>
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
                //value={title}
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
                //value={review}
                  onChange={handleInputchange}
                    //error={reviewError}
                    label="Comentario"
                    //helperText={reviewMessage}
                    variant="outlined"
                />
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={addReview}
                    className='reviewButton'
                >
                Enviar opinión
                </Button>
            </div>
            {notify}
        </form>
        </div>
    );
}

export default AddReview;




/*const handleSubmit = (event) => {
  event.preventDefault()
  setTitleError(false)
  setEmailError(false)
  setPasswordError(false)
  if ((title == '') || (review == '')){
      return(alert ('Alguno de los datos es incorrecto o te falta información'))
    }else if(title.length<4){
        return(alert ("El titulo debe tener al menos 4 caracteres"))
    }else if(review.length<10){
      return(alert ("Tu comentario debe tener al menos 10 caracteres"))
  }
}*/

/* <TextField
                placeholder='Titulo'
                className='commentTitle'
                required={true}
                value={title}
                  onChange={(e) =>{
                    setTitle(e.target.value);
                    if(title.length<4){
                      setTitleError(true);
                      setTitleMessage("El título debe tener al menos 4 letras");
                    }else{
                        setTitleError(false);
                        setTitleMessage("");
                      }
                    }}
                    error={titleError}
                    label="Título"
                    helperText={titleMessage}
                    variant="outlined"
                />
                <TextareaAutosize
                minRows={10}
                className='commentDescription'
                placeholder='¿Qué te pareció el libro?'
                required={true}
                value={review}
                  onChange={(e) =>{
                    setReview(e.target.value);
                    if(review.length<10){
                      setReviewError(true);
                      setReviewMessage("Tu comentario debe tener al menos 10 caracteres");
                    }else{
                        setReviewError(false);
                        setReviewMessage("");
                      }
                    }}
                    error={reviewError}
                    label="Comentario"
                    helperText={reviewMessage}
                    variant="outlined"
                />
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={addReview}
                    className='reviewButton'
                >
                Enviar opinión
                </Button>
 */