import { Button, ButtonGroup, Col, Container, Row } from 'react-bootstrap';
import ContainerApp from '../components/ContainerApp';
import { Flex } from '../components/Flex';
import { useNavigate } from "react-router-dom";

export default function FinalizacaoCompra() {
  const navigate = useNavigate();

  return (
    <ContainerApp>
      <Container>
        <Row>
          <Col sm={12}>
            <h1 className="mt-3 mb-5 text-center">Compra realizada</h1>
          </Col>
          <Col sm={12}>
            <p className="text-center">Agradecemos a preferencia</p>
          </Col>
          <Col sm={12}>
            <Flex justifyContent="end" alignItems="center" flexDirection="row">
              <ButtonGroup>
                <Button
                  type="button"
                  variant="success"
                  size="sm"
                  onClick={() => navigate("/homepage")}
                >Voltar ao inicio</Button>
              </ButtonGroup>
            </Flex>
          </Col>
        </Row>
      </Container>
    </ContainerApp>
  );
}
