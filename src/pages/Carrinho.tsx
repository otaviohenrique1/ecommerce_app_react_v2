import { useContext, useEffect, useState } from 'react';
import { Button, ButtonGroup, Col, Form, InputGroup, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ContainerApp from '../components/ContainerApp'
import { Flex } from '../components/Flex';
import { ItemListaVazio } from '../components/ItemListaVazio';
import { UsuarioContext } from '../context/usuarioContext';
import { CarrinhoCompras, UsuarioContextType } from '../types/types';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { FormatadorMoeda } from '../utils/Formatador';

export default function Carrinho() {
  const navigate = useNavigate();
  const { carrinhoProdutos, limparCarrinho, removerCarrinho, editarCarrinho } = useContext(UsuarioContext || null) as UsuarioContextType;
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
              <>
                {carrinhoProdutos.map((item, index) => {
                  return (
                    <ListGroupItem key={index}>
                      <Flex flexDirection="column">
                        <Flex
                          flexDirection="row"
                          justifyContent="space-between"
                          className="mb-3"
                        >
                          <span>{item.nome}</span>
                          <span>{FormatadorMoeda(item.preco)}</span>
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
                                  preco: item.preco,
                                  quantidade: item.quantidade + 1
                                })}
                              >+</Button>
                              <Form.Control
                                value={item.quantidade}
                              />
                              <Button
                                variant="danger"
                                className="fw-bold"
                                onClick={() => editarCarrinho(item.codigo, {
                                  codigo: item.codigo,
                                  nome: item.nome,
                                  preco: item.preco,
                                  quantidade: item.quantidade - 1
                                })}
                              >-</Button>
                            </InputGroup>
                          </Flex>
                          <Button
                            variant="danger"
                            onClick={() => removerCarrinho(item.codigo)}
                          >Remover</Button>
                        </Flex>
                      </Flex>
                    </ListGroupItem>
                  );
                })}
              </>
            )}
          </ListGroup>
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
