
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import LogoHome from "../assets/LogoHome.png"

//menu de navegacion con sus estilos incorporados
function NavBar() {
  return (
    <div className="navBar">
       <Navbar style={{backgroundColor: "#91A9B0"}}>
        <Container>
          <Navbar.Brand href="#home" style ={{ marginRight: 150}}>
          <img src= {LogoHome} alt="logo" style={{padding:10,marginRight: 220}}/>
          </Navbar.Brand>
          <Nav className="me-auto" style={{fontSize: 18, fontWeight: "bold", gap: 30}}>
            <Nav.Link href="#terapias">Terapias</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
          
        </Container>
      </Navbar>
    </div>
  );
}

//export
export default NavBar;