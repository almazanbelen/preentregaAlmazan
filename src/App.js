import { useState } from 'react';
import {MdAddShoppingCart} from "react-icons/md";

import NavBar from "./components/Menu"
import ItemListContainer from "./components/ItemListConteiner";

import "./app.css"

//funcion principal

function App() {
  const [shoppingCart, setShoppingCart] = useState(0);
  const handleChangeCart = () => {
    setShoppingCart(shoppingCart + 1);    
  }
  return (
    <div className="App">
     <NavBar/>
     <section className='shoppingCart'>
       <MdAddShoppingCart className='carrito'/>
       <h1 className='product'>Cantidad de productos:{shoppingCart}
       </h1>       
     </section>
     <div className='cartContain'>
        <ItemListContainer titulo="Producto" onClick={handleChangeCart}/>
        <ItemListContainer titulo="Producto" onClick={handleChangeCart}/>
        <ItemListContainer titulo="Producto" onClick={handleChangeCart}/>
        <ItemListContainer titulo="Producto" onClick={handleChangeCart}/>
     </div>
     <footer>
      <h2 className='footerText'>Todos los derechos reservados ©</h2>
     </footer>
    </div>
  );
}

//export
export default App;
