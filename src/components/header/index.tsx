import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './index.css'

export const Header = () => {
  return (
    <Navbar className='Navbar ms-5' expand="lg">
      <Container fluid>
        <Navbar.Brand id='Name' href="#"><b>MEAN</b>GIRLS</Navbar.Brand>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="pesquisar"
              className="me-2 d-none d-xl-block"
              aria-label="Search"
            />
            <Button id='BtnSearch'><img src="lupa.png" style={{width: "20px"}}></img></Button>
          </Form>
      </Container>
    </Navbar>
  );
}
