import React from 'react'
import { Button, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import Appbar from '../components/Appbar';
import { Flex } from '../components/Flex';
import { FormatadorMoeda } from '../utils/Formatador';
import { listaProdutos } from '../utils/listas'

export default function Homepage() {
  return (
    <>
      <Appbar/>
      <Container>
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
                        >Adicionar ao carrinho</Button>
                      </Flex>
                    </Flex>
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  )
}
