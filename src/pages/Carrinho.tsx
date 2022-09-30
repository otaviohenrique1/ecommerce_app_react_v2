import { useContext, useEffect, useState } from 'react';
import { Button, ButtonGroup, Col, Row, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ContainerApp from '../components/ContainerApp'
import { Flex } from '../components/Flex';
import { UsuarioContext } from '../context/usuarioContext';
import { UsuarioContextType } from '../types/types';
import { FormatadorMoeda } from '../utils/Formatador';
import { ModalConfirmacao } from '../components/Modal';

export default function Carrinho() {
  const navigate = useNavigate();
  const { carrinhoProdutos, limparCarrinho, removerCarrinho } = useContext(UsuarioContext || null) as UsuarioContextType;
  const [precoTotal, setPrecoTotal] = useState<number>(0);

  useEffect(() => {
    setPrecoTotal(carrinhoProdutos.reduce((x, y) => x + y.preco, 0));
  }, [carrinhoProdutos]);

  return (
    <ContainerApp>
      <Row>
        <Col sm={12}>
          <h1 className="mt-3 mb-5 text-center">Carrinho</h1>
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
              {(carrinhoProdutos.length === 0) ? (
                <tr>
                  <td colSpan={5} align="center">
                    <h2>Lista vazia</h2>
                  </td>
                </tr>
              ) : (
                <>
                  {carrinhoProdutos.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.nome}</td>
                        <td>{FormatadorMoeda(item.preco)}</td>
                        <td align="right">
                          <Button
                            variant="danger"
                            onClick={() => {
                              ModalConfirmacao("Aviso", "warning", "Deseja remover o produto do carrinho?")
                                .then(({ isConfirmed }) => {
                                  if (isConfirmed) {
                                    removerCarrinho(index);
                                  }
                                });
                            }}
                          >Remover</Button>
                        </td>
                      </tr>
                    );
                  })}
                </>
              )}
            </tbody>
            <tfoot>
              <tr>
                <td align="right" colSpan={4}>
                  <Flex justifyContent="end" flexDirection="row">
                    <span className="me-2">{"Total:"}</span>
                    <span>{FormatadorMoeda(precoTotal)}</span>
                  </Flex>
                </td>
              </tr>
            </tfoot>
          </Table>
        </Col>
        <Col sm={12} className="pt-5">
          <Flex justifyContent="end">
            <ButtonGroup>
              <Button
                variant="success"
                onClick={() => navigate("/homepage")}
                disabled={(carrinhoProdutos.length === 0) ? true : false}
              >Continuar comprando</Button>
              <Button
                variant="primary"
                onClick={() => navigate("/pagamento")}
                disabled={(carrinhoProdutos.length === 0) ? true : false}
              >Finalizar compra</Button>
              <Button
                variant="danger"
                onClick={() => {
                  ModalConfirmacao("Aviso", "warning", "Deseja mesmo limpar o carrinho?")
                    .then(({ isConfirmed }) => {
                      if (isConfirmed) {
                        limparCarrinho();
                      }
                    });
                }}
                disabled={(carrinhoProdutos.length === 0) ? true : false}
              >Limpar carrinho</Button>
              <Button
                variant="warning"
                onClick={() => navigate("/homepage")}
              >Voltar</Button>
            </ButtonGroup>
          </Flex>
        </Col>
      </Row>
    </ContainerApp>
  );
}
