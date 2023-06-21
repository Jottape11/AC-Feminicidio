import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavComponente() {
  return (
    <>
       <Navbar className='cor' variant="dark">
        <Container>
          <Navbar.Brand href="#home">Feminicídio no Brasil</Navbar.Brand>
        </Container>
      </Navbar>
      </>
  );
}

export default NavComponente;