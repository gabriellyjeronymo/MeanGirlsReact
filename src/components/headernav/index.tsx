import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './index.css'

export const HeaderNav = () => {
  return (
    <Navbar id='nav' expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="PIJAMAS" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">
                ....
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                ....
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="CALCINHAS" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">
                ....
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                ....
              </NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="SUTIÃ" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">
                ....
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                ....
              </NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="CONJUNTOS" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">
                ....
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                ....
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="PLUS SIZE" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">
                ....
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                ....
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
