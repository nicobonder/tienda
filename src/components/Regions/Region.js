import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Product from '../product/Product';

const Region = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);

    return (
        <div>
            
        </div>
    );
}

export default Region;
