import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import accounting from 'accounting';

import './checkoutCard.css';

import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';

const useStyles = styled((theme) => ({
  root: {
    maxWidth: 345,
  },
  action:{
    marginTop: "3rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  }
}));


const ExpandMore = styled((props) => {
  const { expand, ...other } = props; 
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CheckoutCard ({
  product : {id, name, author, image, price, rating, file}}) {
  const [expanded, setExpanded] = React.useState(false);
  const [{basket}, dispatch] = useStateValue();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const removeItem = () => dispatch({
    type: actionTypes.REMOVE_ITEM,
    id: id,
  })

  return (
    <Card sx={{ maxWidth: 350, color: '#000' }}>
      <div className='cardHeader'>
        <CardHeader 
          
          action={
            <Typography  sx={{ fontSize: '1.2rem', marginTop:0.3}} variant="h5" color="text.secondary">
            {accounting.formatMoney(price)}
            </Typography>
          }
        />
          <CardContent>  
            <Typography sx={{ fontSize: '1.2em', fontWeight:500, marginRight: 0.7}} variant="h3" color="text.secondary">
                {name}
            </Typography>
        
            <Typography sx={{ fontSize: '1.1em', marginRight: 0.5 }} variant="h3" color="text.secondary">
              {author}
            </Typography>
          </CardContent>
      </div>
      <CardMedia
        component="img"
        height="300"
        image={image}
        alt={name}
      />
      
      <CardActions className='actions' disableSpacing>
      
        <div className='cardRating'>
          {Array(rating)
              .fill()
              .map((_, i) => (
                  <p>&#11088;</p>
              ))}
          </div>
          <IconButton>
            <DeleteIcon onClick={removeItem} fontSize='medium' />
          </IconButton>
          
      </CardActions>
    
    </Card>
  );
}
