import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import Imagen from "../assets/Imagen.png"

import "./styles-item-list.css"

//esta funcion suma los productos de cada cart
function ItemListContainer ({titulo, onClick}) {
   
    const [cantidad, setCantidad] = useState (0);  

    function handleChange(){      
    setCantidad(cantidad + 1);
    onClick();    
    }

    return (    
    <><div className='cartDescription'>
        <img className= "imgDefault" src={Imagen} alt= "imagen default"/>
        <h1 className='productName'>{titulo}</h1>
        <h2 className='productName'>Cantidad de productos {cantidad}</h2>        
        <Button className= 'button' variant="dark" onClick={handleChange}>Agregar al carrito</Button>
    </div></>
    )
}

//export
export default ItemListContainer;