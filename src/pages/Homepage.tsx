import { useContext, useState } from 'react';
import { Button, Col, Form, InputGroup, /* ListGroup, ListGroupItem, */ Row, Table } from 'react-bootstrap';
import ContainerApp from '../components/ContainerApp';
// import { Flex } from '../components/Flex';
import { UsuarioContext } from '../context/usuarioContext';
import { UsuarioContextType } from '../types/types';
import { FormatadorMoeda } from '../utils/Formatador';
import { listaProdutos } from '../utils/listas'
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();
  const { adicionarCarrinho, editarCarrinho } = useContext(UsuarioContext || null) as UsuarioContextType;

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
                <th>Nome</th>
                <th>Preço</th>
                <th>Quantidade</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {listaProdutos.map((item, index) => {
                return (
                  <ItemTabela
                    key={index}
                    codigo={item.codigo}
                    nome={item.nome}
                    preco={item.preco}
                  />
                  //   <tr key={index}>
                  //     <td>{`${item.marca} ${item.nome}`}</td>
                  //     <td>{FormatadorMoeda(item.preco)}</td>
                  //     <td>
                  //       <InputGroup>
                  //         <Button
                  //           variant="primary"
                  //           size="sm"
                  //           className="fw-bold"
                  //           onClick={() => editarCarrinho(item.codigo, {
                  //             codigo: item.codigo,
                  //             nome: item.nome,
                  //             preco: item.preco * item.quantidade,
                  //             precoUnidade: item.preco,
                  //             quantidade: item.quantidade + 1
                  //           })}
                  //         >+</Button>
                  //         <Form.Control
                  //           id="quantidade"
                  //           name="quantidade"
                  //           type="number"
                  //           size="sm"
                  //           value={item.quantidade}
                  //           style={{ width: "100px" }}
                  //         // defaultValue={item.quantidade}
                  //         />
                  //         <Button
                  //           variant="danger"
                  //           size="sm"
                  //           className="fw-bold"
                  //           onClick={() => editarCarrinho(item.codigo, {
                  //             codigo: item.codigo,
                  //             nome: item.nome,
                  //             preco: item.preco * item.quantidade,
                  //             precoUnidade: item.preco,
                  //             quantidade: (item.quantidade === 0) ? item.quantidade - 1 : 1
                  //           })}
                  //         >-</Button>
                  //       </InputGroup>
                  //     </td>
                  //     <td align="right">
                  //       <Button
                  //         variant="primary"
                  //         size="sm"
                  //         onClick={() => {
                  //           adicionarCarrinho({
                  //             codigo: item.codigo,
                  //             nome: item.nome,
                  //             preco: item.preco,
                  //             precoUnidade: item.preco,
                  //             quantidade: item.quantidade,
                  //           });
                  //           navigate("/carrinho");
                  //         }}
                  //       >Adicionar</Button>
                  //     </td>
                  //   </tr>
                );
              })}
            </tbody>
          </Table>
          {/* <ListGroup>
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
                          precoUnidade: item.preco,
                          quantidade: 1,
                        })}
                      >Adicionar ao carrinho</Button>
                    </Flex>
                  </Flex>
                </ListGroupItem>
              );
            })}
          </ListGroup> */}
        </Col>
      </Row>
    </ContainerApp>
  );
}

interface ItemTabelaProps {
  codigo: string;
  nome: string;
  preco: number;
}

function ItemTabela(props: ItemTabelaProps) {
  const navigate = useNavigate();
  const { adicionarCarrinho, editarCarrinho } = useContext(UsuarioContext || null) as UsuarioContextType;
  const [quantidade, setQuantidade] = useState(1);

  return (
    <tr>
      <td>{props.nome}</td>
      <td>{FormatadorMoeda(props.preco)}</td>
      <td>
        <InputGroup>
          <Button
            variant="primary"
            size="sm"
            className="fw-bold"
            onClick={() => {
              editarCarrinho(props.codigo, {
                codigo: props.codigo,
                nome: props.nome,
                preco: props.preco * quantidade,
                precoUnidade: props.preco,
                quantidade: quantidade + 1
              });
              setQuantidade(quantidade + 1);
            }}
          >+</Button>
          <Form.Control
            id="quantidade"
            name="quantidade"
            type="number"
            size="sm"
            value={quantidade}
            style={{ width: "100px" }}
          // defaultValue={item.quantidade}
          />
          <Button
            variant="danger"
            size="sm"
            className="fw-bold"
            onClick={() => {
              editarCarrinho(props.codigo, {
                codigo: props.codigo,
                nome: props.nome,
                preco: props.preco * quantidade,
                precoUnidade: props.preco,
                quantidade: quantidade
              });
              setQuantidade((quantidade < 0) ? quantidade - 1 : 0);
            }}
          >-</Button>
        </InputGroup>
      </td>
      <td align="right">
        <Button
          variant="primary"
          size="sm"
          onClick={() => {
            adicionarCarrinho({
              codigo: props.codigo,
              nome: props.nome,
              preco: props.preco * quantidade,
              precoUnidade: props.preco,
              // quantidade: (quantidade === 0) ? 1 : quantidade,
              quantidade: 1,
            });
            navigate("/carrinho");
          }}
          // disabled={(quantidade === 0) ? true : false}
        >Adicionar</Button>
      </td>
    </tr>
  );
}