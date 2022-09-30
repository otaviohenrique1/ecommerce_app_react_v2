import { useContext } from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';
import ContainerApp from '../components/ContainerApp';
import { UsuarioContext } from '../context/usuarioContext';
import { UsuarioContextType } from '../types/types';
import { FormatadorMoeda } from '../utils/Formatador';
import { listaProdutos } from '../utils/listas'
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();
  const { adicionarCarrinho } = useContext(UsuarioContext || null) as UsuarioContextType;

  return (
    <ContainerApp>
      <Row>
        <Col sm={12}>
          <h1 className="mt-3 mb-5 text-center">Homepage</h1>
        </Col>
        <Col sm={12}>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Preço</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {listaProdutos.map((item, index) => {
                return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.nome}</td>
                      <td>{FormatadorMoeda(item.preco)}</td>
                      <td align="right">
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => {
                            adicionarCarrinho({
                              codigo: item.codigo,
                              nome: item.nome,
                              preco: item.preco,
                            });
                            navigate("/carrinho");
                          }}
                        >Adicionar</Button>
                      </td>
                    </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </ContainerApp>
  );
}
