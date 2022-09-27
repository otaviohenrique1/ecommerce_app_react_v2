import { useContext } from 'react';
import { Button, ButtonGroup, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ContainerApp from '../components/ContainerApp'
import { Flex } from '../components/Flex';
import { UsuarioContext } from '../context/usuarioContext';
import { UsuarioContextType } from '../types/types';

export default function Carrinho() {
  const navigate = useNavigate();
  const { carrinhoProdutos } = useContext(UsuarioContext || null) as UsuarioContextType;

  return (
    <ContainerApp>
      <Row>
        <Col sm={12}>
          <h1 className="mt-3 mb-5 text-center">Carrinho</h1>
        </Col>
        <Col sm={12}>
          <ListGroup>
            {/* {(carrinhoProdutos) ? () : param3;} */}
          </ListGroup>
        </Col>
        <Col sm={12}>
          <Flex justifyContent="end">
            <ButtonGroup>
              <Button
                variant="primary"
                onClick={() => { }}
              >Finalizar compra</Button>
              <Button
                variant="danger"
                onClick={() => { }}
              >Limpar carrinho</Button>
            </ButtonGroup>
          </Flex>
        </Col>
      </Row>
    </ContainerApp>
  );
}
