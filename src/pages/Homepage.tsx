import { useContext } from 'react';
import { Button, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import ContainerApp from '../components/ContainerApp';
import { Flex } from '../components/Flex';
import { UsuarioContext } from '../context/usuarioContext';
import { UsuarioContextType } from '../types/types';
import { FormatadorMoeda } from '../utils/Formatador';
import { listaProdutos } from '../utils/listas'

export default function Homepage() {
  const { adicionarCarrinho } = useContext(UsuarioContext || null) as UsuarioContextType;

  return (
    <ContainerApp>
      <Row>
        <Col sm={12}>
          <h1 className="mt-3 mb-5 text-center">Homepage</h1>
        </Col>
        <Col sm={12}>
          <ListGroup>
            {listaProdutos.map((item, index) => {
              return (
                <ListGroupItem key={index}>
                  <Flex
                    flexDirection="column"
                  >
                    <Flex
                      flexDirection="row"
                      justifyContent="space-between"
                    >
                      <span>{item.nome}</span>
                      <span>{FormatadorMoeda(item.preco)}</span>
                    </Flex>
                    <Flex
                      justifyContent="end"
                      flexDirection="row"
                      className="mt-1"
                    >
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => adicionarCarrinho({
                          codigo: item.codigo,
                          nome: item.nome,
                          preco: item.preco,
                          quantidade: item.quantidade,
                        })}
                      >Adicionar ao carrinho</Button>
                    </Flex>
                  </Flex>
                </ListGroupItem>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </ContainerApp>
  );
}
