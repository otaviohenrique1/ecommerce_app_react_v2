import { Col, Container, Row } from 'react-bootstrap';
import ContainerApp from '../components/ContainerApp';

export default function Favoritos() {
  return (
    <ContainerApp>
      <Container>
        <Row>
          <Col sm={12}>
            <h1 className="mt-3 mb-5 text-center">Favoritos</h1>
          </Col>
          {/* <Col sm={12}></Col> */}
        </Row>
      </Container>
    </ContainerApp>
  );
}