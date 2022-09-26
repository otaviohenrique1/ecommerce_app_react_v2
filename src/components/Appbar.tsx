import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { Flex } from './Flex';

export default function Appbar() {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Flex
            flexDirection="row"
            alignItems="center"
          >
            <AiOutlineShoppingCart size={25} />
            <span className="ms-1">E-commerce App</span>
          </Flex>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-app-nav" />
        <Navbar.Collapse id="navbar-app-nav">
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => navigate("/homepage")}
            >Homepage</Nav.Link>
            <Nav.Link>Carrinho</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown
              title={
                <>
                  <BiUserCircle size={25} />
                  <span>Usuario</span>
                </>
              }
              id="usuario-dropdown"
            >
              <NavDropdown.Item
                onClick={() => navigate("/perfil")}
              >Perfil</NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => navigate("/favoritos")}
              >Favoritos</NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => navigate("/historico")}
              >Historico</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => {}}
              >Sair</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
