import { useContext } from 'react';
import { Button, ButtonGroup, Col, Container, Row, Table } from 'react-bootstrap';
import ContainerApp from '../components/ContainerApp';
import { UsuarioContext } from '../context/usuarioContext';
import { UsuarioContextType } from '../types/types';
import { useNavigate } from "react-router-dom";

export default function Favoritos() {
  const navigate = useNavigate();
  const { listarFavoritos, removerFavorito, adicionarHistorico } = useContext(UsuarioContext || null) as UsuarioContextType;

  return (
    <ContainerApp>
      <Container>
        <Row>
          <Col sm={12}>
            <h1 className="mt-3 mb-5 text-center">Favoritos</h1>
          </Col>
          <Col sm={12}>
            <Table size="sm" striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Preço</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {(listarFavoritos().length === 0) ? (
                  <tr>
                    <td>Lista vazia</td>
                  </tr>
                ) : (
                  <>
                    {listarFavoritos().map((item, index) => {
                      return (
                        <tr>
                          <td>{index}</td>
                          <td>{item.nome}</td>
                          <td>{item.preco}</td>
                          <td>
                            <ButtonGroup>
                              <Button
                                variant="primary"
                                size="sm"
                                onClick={() => {
                                  adicionarHistorico({
                                    codigo: item.codigo,
                                    nome: item.nome,
                                    preco: item.preco,
                                  });
                                  navigate(`/produto/${item.codigo}`);
                                }}
                              >Exibir</Button>
                              <Button
                                variant="danger"
                                size="sm"
                                onClick={() => removerFavorito(item.codigo)}
                              >Remover</Button>
                            </ButtonGroup>
                          </td>
                        </tr>
                      );
                    })}
                  </>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </ContainerApp>
  );
}
