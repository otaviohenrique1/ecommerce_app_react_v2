import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { Flex } from './Flex';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useContext } from 'react';
import { UsuarioContext } from '../context/usuarioContext';
import { UsuarioContextType } from '../types/types';

export default function Appbar() {
  const navigate = useNavigate();
  const SwalModal = withReactContent(Swal);

  const { removerAuthToken } = useContext(UsuarioContext || null) as UsuarioContextType;

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
            <Nav.Link onClick={() => navigate("/homepage")}>Homepage</Nav.Link>
            <Nav.Link onClick={() => navigate("/carrinho")}>Carrinho</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title={<BiUserCircle size={25} />} id="usuario-dropdown">
              <NavDropdown.Item onClick={() => navigate("/perfil")}>Perfil</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/favoritos")}>Favoritos</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/historico")}>Historico</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => {
                  SwalModal.fire({
                    title: "Aviso",
                    icon: "warning",
                    html: <p>Deseja mesmo sair?</p>,
                    confirmButtonText: "Sim",
                    cancelButtonText: "Não",
                    showCancelButton: true,
                    buttonsStyling: false,
                    customClass: {
                      confirmButton: "btn btn-primary mx-1",
                      cancelButton: "btn btn-danger mx-1",
                    }
                  }).then(({ isConfirmed }) => {
                    if (isConfirmed) {
                      removerAuthToken();
                      navigate("/");
                    }
                  });
                }}
              >Sair</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
