import * as React from 'react';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddShoppingCart } from '@material-ui/icons';

import accounting from 'accounting';

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

export default function Product({
  product : {id, name, author, regionTrip, image, price, rating, description, file}}) {
  const [{basket}, dispatch] = useStateValue();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
        file
      }
    })
  }
  
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
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {regionTrip}
        </Typography>

      </CardContent>
     
      <CardActions disableSpacing>
        
        <IconButton onClick={addToBasket} aria-label="add to Cart">
          <AddShoppingCart fontSize='large' />
        </IconButton>
       
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        {Array(rating)
            .fill()
            .map((_, i) => (
                <p>&#11088;</p>
            ))}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
          <Typography paragraph>
          {description}
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );
}
