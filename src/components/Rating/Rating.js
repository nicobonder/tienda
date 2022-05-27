import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import './rating.css';
import { useStateValue } from '../../StateProvider';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Link, useNavigate } from 'react-router-dom';

//Haciendo rating y addReview todo junto
//Rating
import { Rating as RatingApp } from 'react-simple-star-rating';
import { Button, TextareaAutosize, TextField } from '@mui/material';
import { ShowChart } from '@material-ui/icons';
import { initialState } from '../../reducer';
import { db } from '../../firebase';

//toastify
import { toast } from 'react-toastify';

export default function Rating(props) {
  const [{basket, user}, dispatch] = useStateValue();
  const { id } = useParams()
  const navigate = useNavigate();
  const initialStateValues = {
    title: "",
    review: "",
    loading: "",
    rating: 0,
  };
  const [rating, setRating] = useState(null) // initial rating value
  const [userLogged, setuserLogged] = useState(false);
  const [values, setValues] = useState(initialStateValues);
  const [email,setEmail] = useState();
  const[formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  firebase.auth().onAuthStateChanged((user) => {
    user ? setuserLogged(true) : setuserLogged(false)
  })

  const handleInputchange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errores = validate(values)
    if(Object.keys(errores).length === 0) {
       props.addNewComment(values);
       setValues({ ...initialStateValues });
       setIsSubmit(true);
    }
    setFormErrors(validate(values));
};

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit){
      console.log(values);
    }
  },[formErrors]);

  const validate = (values) => {
    const errors = {};
    if (values.title.length < 4) {
      errors.title = "El título tiene que tener por lo menos 4 caracteres";
    } else if (values.title.length === 0) {
    errors.title = "Debes ingresar un título";
    }
    if (values.review.length < 8) {
      errors.review = "El comentario tiene que tener por lo menos 8 caracteres";
    } else if (values.review.length === 0) {
      errors.review = "Debes ingresar un comentario";
    }
    return errors;
  };  

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // Some logic
  }

  const addReview = () => {
    if (!ValidForm()) {
      return
    }
  }

  const ValidForm = () => {
    // setTitleError(null)
    //setReviewError(null)
    let isValid = true
    if (!rating) { //si el usuario no elije rating
      toast.error('Debes darle una puntuación con las estrellas');
      isValid = false
    }
    return isValid
  }

  const getCommentById = async (id) => {
    const doc = await db.collection('comments').doc(id).get();
    setValues({ ...doc.data() })
  }

  //ver que pasa si anulo esta funcion
  useEffect(() => {
    console.log(props.currentId)
    if (props.currentId === '') {
      setValues({ ...initialStateValues });
    } else {
      getCommentById(props.currentId);
    }
  }, [props.currentId]);


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
            <p>{ formErrors.title}</p>
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
            <p>{ formErrors.review}</p>
            {
              userLogged ? (
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={addReview}
                  className='reviewButton'
                  title='Escribe una opinión'>
                  {props.currentId === '' ? 'Subí tu opinión' : 'Actualizá tu opinión'}
                </Button>
              ) : (
                <p className='needLogin' onClick={() => navigate("/signin")}>Hacé clic aquí para loguearte y poder dejar tu opinión.</p>
              )
            }

          </div>

        </form>
      </div>
    </div>
  );
}