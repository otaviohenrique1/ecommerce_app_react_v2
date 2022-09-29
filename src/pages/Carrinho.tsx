import { useContext, useEffect, useState } from 'react';
import { Button, ButtonGroup, Col, Form, InputGroup, /* ListGroup, */ ListGroupItem, Row, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ContainerApp from '../components/ContainerApp'
import { Flex } from '../components/Flex';
// import { ItemListaVazio } from '../components/ItemListaVazio';
import { UsuarioContext } from '../context/usuarioContext';
import { CarrinhoCompras, UsuarioContextType } from '../types/types';
import { FormatadorMoeda } from '../utils/Formatador';
import { ModalConfirmacao } from '../components/Modal';

export default function Carrinho() {
  const navigate = useNavigate();
  const { carrinhoProdutos, limparCarrinho, removerCarrinho, /* editarCarrinho, */ } = useContext(UsuarioContext || null) as UsuarioContextType;
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
                <th>Nome</th>
                <th>Quantidade</th>
                <th>Preço(Unidade)</th>
                <th>Preço(Montante)</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {(carrinhoProdutos.length === 0) ? (
                <td colSpan={4} align="center">Lista vazia</td>
              ) : (
                <>
                  {carrinhoProdutos.map((item, index) => {
                    return (
                      <tr>
                        <td>{item.nome}</td>
                        <td>{item.quantidade}</td>
                        <td>{item.precoUnidade}</td>
                        <td>{item.quantidade * item.precoUnidade}</td>
                        <td align="right">
                          <Button
                            variant="danger"
                            onClick={() => {
                              ModalConfirmacao("Aviso", "warning", "Deseja remover o produto do carrinho?")
                                .then(({ isConfirmed }) => {
                                  if (isConfirmed) {
                                    removerCarrinho(item.codigo);
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
                <td align="right" colSpan={5}>
                  <Flex justifyContent="end" flexDirection="row">
                    <span className="me-2">{"Total:"}</span>
                    <span>{FormatadorMoeda(precoTotal)}</span>
                    {/* <span>{FormatadorMoeda(carrinhoProdutos.reduce((x, y) => x + y.preco, 0))}</span> */}
                  </Flex>
                </td>
              </tr>
            </tfoot>
          </Table>
          {/* <ListGroup>
            {(carrinhoProdutos.length === 0) ? (
              <ItemListaVazio />
            ) : (
              <>
                {carrinhoProdutos.map((item, index) => {
                  let resultadoQuantidadePreco = item.quantidade * item.precoUnidade;
                  let resultadoQuantidadePrecoFormatado = `${item.quantidade} x ${FormatadorMoeda(item.precoUnidade)} = ${FormatadorMoeda(resultadoQuantidadePreco)}`;

                  return (
                    <ListGroupItem key={index}>
                      <Flex flexDirection="column">
                        <Flex
                          flexDirection="row"
                          justifyContent="space-between"
                          className="mb-3"
                        >
                          <span>{item.nome}</span>
                          <span>{resultadoQuantidadePrecoFormatado}</span>
                        </Flex>
                        <Flex
                          flexDirection="row"
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <Flex flexDirection="row">
                            <InputGroup>
                              <Button
                                variant="primary"
                                className="fw-bold"
                                onClick={() => editarCarrinho(item.codigo, {
                                  codigo: item.codigo,
                                  nome: item.nome,
                                  preco: resultadoQuantidadePreco,
                                  precoUnidade: item.precoUnidade,
                                  quantidade: item.quantidade + 1
                                })}
                              >+</Button>
                              <Form.Control
                                id="quantidade"
                                name="quantidade"
                                type="number"
                                value={item.quantidade}
                              // defaultValue={item.quantidade}
                              />
                              <Button
                                variant="danger"
                                className="fw-bold"
                                onClick={() => editarCarrinho(item.codigo, {
                                  codigo: item.codigo,
                                  nome: item.nome,
                                  preco: resultadoQuantidadePreco,
                                  precoUnidade: item.precoUnidade,
                                  quantidade: (item.quantidade === 0) ? item.quantidade - 1 : 1
                                })}
                              >-</Button>
                            </InputGroup>
                          </Flex>
                          <Button
                            variant="danger"
                            onClick={() => {
                              ModalConfirmacao("Aviso", "warning", "Deseja remover o produto do carrinho?")
                                .then(({ isConfirmed }) => {
                                  if (isConfirmed) {
                                    removerCarrinho(item.codigo);
                                  }
                                });
                            }}
                          >Remover</Button>
                        </Flex>
                      </Flex>
                    </ListGroupItem>
                  );
                })}
              </>
            )}
            {(carrinhoProdutos.length !== 0) ? (
              <ListGroupItem>
                <Flex justifyContent="end" flexDirection="row">
                  <span className="me-2">{"Total (R$):"}</span>
                  <span>{precoTotal}</span>
                </Flex>
              </ListGroupItem>
            ) : null}
          </ListGroup> */}
        </Col>
        <Col sm={12} className="pt-5">
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
                  ModalConfirmacao("Aviso", "warning", "Deseja mesmo limpar o carrinho?")
                    .then(({ isConfirmed }) => {
                      if (isConfirmed) {
                        limparCarrinho();
                      }
                    });
                }}
                disabled={(carrinhoProdutos.length === 0) ? true : false}
              >Limpar carrinho</Button>
            </ButtonGroup>
          </Flex>
        </Col>
      </Row>
    </ContainerApp>
  );
}

interface ItemCarrinhoProps {
  produtoCarrinho: CarrinhoCompras;
}

export function ItemCarrinho(props: ItemCarrinhoProps) {
  const { removerCarrinho } = useContext(UsuarioContext || null) as UsuarioContextType;

  const [valor, setValor] = useState<number>(0);

  useEffect(() => {
    setValor(props.produtoCarrinho.quantidade);
  }, [props.produtoCarrinho.quantidade]);

  return (
    <ListGroupItem>
      <Flex flexDirection="column">
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          className="mb-3"
        >
          <span>{props.produtoCarrinho.nome}</span>
          <span>{FormatadorMoeda(props.produtoCarrinho.preco)}</span>
        </Flex>
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex flexDirection="row">
            <InputGroup>
              <Button
                variant="primary"
                className="fw-bold"
                onClick={() => setValor(valor + 1)}
              >+</Button>
              <Form.Control
                value={valor}
              />
              <Button
                variant="danger"
                className="fw-bold"
                onClick={() => setValor(valor - 1)}
              >-</Button>
            </InputGroup>
          </Flex>
          <Button
            variant="danger"
            onClick={() => removerCarrinho(props.produtoCarrinho.codigo)}
          >Remover</Button>
        </Flex>
      </Flex>
    </ListGroupItem>
  );
}

interface ContadorQuantidadeProps {
  quantidade: number;
}

export function ContadorQuantidade(props: ContadorQuantidadeProps) {
  const [valor, setValor] = useState<number>(0);

  useEffect(() => {
    setValor(props.quantidade);
  }, [props.quantidade]);

  return (
    <InputGroup>
      <Button
        variant="primary"
        className="fw-bold"
        onClick={() => setValor(valor + 1)}
      >+</Button>
      <Form.Control
        value={valor}
      />
      <Button
        variant="danger"
        className="fw-bold"
        onClick={() => setValor(valor - 1)}
      >-</Button>
    </InputGroup>
  );
}
