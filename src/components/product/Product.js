import * as React from 'react';
import accounting from 'accounting';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';
import './product.css';
import { Link } from 'react-router-dom';
//Material UI
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
import { Button } from '@mui/material';

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

export default function Product({ product }) {
  const {id, name, author, regionTrip, image, price, rating, description, file, authorImg, authorDescription, pages, language, published} = product;
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
        file, authorImg, authorDescription, pages, language, published
      }
    })
  }
  
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
      <Button>
        <Link className="detailIcon" to={`/product/${product.id}`}>
          <svg
            width="17"
            height="17"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M560 448H512V113.5c0-27.25-21.5-49.5-48-49.5L352 64.01V128h96V512h112c8.875 0 16-7.125 16-15.1v-31.1C576 455.1 568.9 448 560 448zM280.3 1.007l-192 49.75C73.1 54.51 64 67.76 64 82.88V448H16c-8.875 0-16 7.125-16 15.1v31.1C0 504.9 7.125 512 16 512H320V33.13C320 11.63 300.5-4.243 280.3 1.007zM232 288c-13.25 0-24-14.37-24-31.1c0-17.62 10.75-31.1 24-31.1S256 238.4 256 256C256 273.6 245.3 288 232 288z" />
          </svg>
          VER DETALLES
        </Link>
      </Button>
    </Card>
  );
}
