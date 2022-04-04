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

import './myFile.css';

import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';

export default function MyFile({
    product: { id, name, author, image, price, rating, file } }) {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <Card className='cardCheckOut' sx={{  color: '#000' }}>
            <CardHeader className='header'
                title={name}
                subheader={author}
            />

            <CardMedia className='picture'
                component="img"
                height="170"
                image={image}
                alt={name}
            />
            <CardContent>
                <div className='downloadBook'>
                    {file}
                </div>
            </CardContent>
        </Card>
    )
}