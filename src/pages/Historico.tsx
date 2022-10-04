import { Button, ButtonGroup, Col, Container, Row, Table } from 'react-bootstrap';
import ContainerApp from '../components/ContainerApp';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { UsuarioContext } from '../context/usuarioContext';
import { UsuarioContextType } from '../types/types';
import { FormataData } from '../utils/Formatador';

export default function Historico() {
  const navigate = useNavigate();
  const { listarHistorico } = useContext(UsuarioContext || null) as UsuarioContextType;

  return (
    <ContainerApp>
      <Container>
        <Row>
          <Col sm={12}>
            <h1 className="mt-3 mb-5 text-center">Historico</h1>
          </Col>
          <Col sm={12}>
            <Table size="sm" striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Preço</th>
                  <th>Data de acesso</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {(listarHistorico().length === 0) ? (
                  <tr>
                    <td>Lista vazia</td>
                  </tr>
                ) : (
                  <>
                    {listarHistorico().map((item, index) => {
                      return (
                        <tr>
                          <td>{index}</td>
                          <td>{item.nome}</td>
                          <td>{item.preco}</td>
                          <td>{FormataData(item.data)}</td>
                          <td>
                            <ButtonGroup>
                              <Button
                                variant="primary"
                                size="sm"
                                onClick={() => navigate(`/produto/${item.codigo}`)}
                              >Exibir</Button>
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
