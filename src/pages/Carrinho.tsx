import { useContext } from 'react';
import { Button, ButtonGroup, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ContainerApp from '../components/ContainerApp'
import { Flex } from '../components/Flex';
import { ItemListaVazio } from '../components/ItemListaVazio';
import { UsuarioContext } from '../context/usuarioContext';
import { UsuarioContextType } from '../types/types';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function Carrinho() {
  const navigate = useNavigate();
  const { carrinhoProdutos, limparCarrinho } = useContext(UsuarioContext || null) as UsuarioContextType;
  const SwalModal = withReactContent(Swal);

  return (
    <ContainerApp>
      <Row>
        <Col sm={12}>
          <h1 className="mt-3 mb-5 text-center">Carrinho</h1>
        </Col>
        <Col sm={12}>
          <ListGroup>
            {(carrinhoProdutos.length === 0) ? (
              <ItemListaVazio />
            ) : (
              <ListGroupItem>
                <Flex flexDirection="column">
                  <Flex flexDirection="column"></Flex>
                  <Flex flexDirection="column"></Flex>
                  <Flex
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="end"
                  >
                    <Button
                      variant="danger"
                      onClick={() => { }}
                    >Remover</Button>
                  </Flex>
                </Flex>
              </ListGroupItem>
            )}
          </ListGroup>
        </Col>
        <Col sm={12}>
          <Flex justifyContent="end">
            <ButtonGroup>
              <Button
                variant="primary"
                onClick={() => navigate("/pagamento")}
                disabled={(carrinhoProdutos.length === 0) ? true : false}
              >Finalizar compra</Button>
              <Button
                variant="danger"
                onClick={() => {
                  SwalModal.fire({
                    title: "Aviso",
                    icon: "warning",
                    html: <p>Deseja mesmo limpar o carrinho?</p>,
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
                      limparCarrinho();
                    }
                  });
                }}
              >Limpar carrinho</Button>
            </ButtonGroup>
          </Flex>
        </Col>
      </Row>
    </ContainerApp>
  );
}
