import React, { useState } from 'react';
import products from '../../productData';
import './regionList.css';

const RegionList = () => {
    const [data, setData]=useState(products);
    const filterResult=(catItem)=>{
        const result = products.filter((product) => {
            return product.regionTrip===catItem;
        });
        setData(result);
        console.log(result);
    }

    return (
        <div className='filters'>
            <h4>Regiones</h4>
            <div className='regionFilter'>
                <button className='regionButton' onClick={()=>filterResult('Sudamérica')}>Sudamérica</button>
                <button className='regionButton' onClick={()=>filterResult('Norte América')}>Norte América</button>
                <button className='regionButton' onClick={()=>filterResult('Australia')}>Australia</button>
                <button className='regionButton' onClick={() => filterResult('Oceanía')}>Oceanía</button>
                <button className='regionButton' onClick={() => filterResult('Argentina')}>Argentina</button>
                <button className='regionButton' onClick={() => filterResult('Mundo')}>Mundo</button>
                <button className='regionButton' onClick={() => filterResult('Europa')}>Europa</button>
                <button className='regionButton' onClick={() => filterResult('Asia')}>Asia</button>
                <button className='regionButton' onClick={() => filterResult('Sudeste Asiático')}>Sudeste Asiático
                </button>
                <button className='regionButton' onClick={() => filterResult('África')}>África</button>
                <button className='regionButton' onClick={() => setData(products)}>Todas</button>
            </div>
        </div>   
       
    );
}

export default RegionList;
