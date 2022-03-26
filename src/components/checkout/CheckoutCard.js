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
    <Card className='cardHeader' sx={{ maxWidth: 345, color: '#000' }}>
      <CardHeader 
        
        action={
          <Typography variant="h5" color="text.secondary">
          {accounting.formatMoney(price)}
          </Typography>
        }
        title={name}
        subheader={author}
      />


      <CardMedia
        component="img"
        height="194"
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
            <DeleteIcon onClick={removeItem} fontSize='large' />
          </IconButton>
          
      </CardActions>
    
    </Card>
  );
}
