import { Col, Container, Row, Table } from 'react-bootstrap';
import ContainerApp from '../components/ContainerApp';

export default function Favoritos() {
  return (
    <ContainerApp>
      <Container>
        <Row>
          <Col sm={12}>
            <h1 className="mt-3 mb-5 text-center">Favoritos</h1>
          </Col>
          <Col sm={12}>
            <Table size="sm" striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Preço</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </ContainerApp>
  );
}
