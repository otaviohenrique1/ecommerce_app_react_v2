import { Button, ButtonGroup, Col, Container, Form, Row } from 'react-bootstrap';
import ContainerApp from '../components/ContainerApp';
import { Flex } from '../components/Flex';

export default function FinalizacaoCompra() {

  return (
    <ContainerApp>
      <Container>
        <Row>
          <Col sm={12}>
            <h1 className="mt-3 mb-5 text-center">Compra realizada</h1>
          </Col>
          <Col sm={12}>
            <Flex justifyContent="end" alignItems="center" flexDirection="row">
              <ButtonGroup>
                <Button
                  type="button"
                  variant="success"
                  size="sm"
                >Voltar ao inicio</Button>
              </ButtonGroup>
            </Flex>
          </Col>
          <Col sm={12}></Col>
        </Row>
      </Container>
    </ContainerApp>
  );
}
