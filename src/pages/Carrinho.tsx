import { Col, Row } from 'react-bootstrap'
import ContainerApp from '../components/ContainerApp'

export default function Carrinho() {
  return (
    <ContainerApp>
      <Row>
        <Col sm={12}>
          <h1 className="mt-3 mb-5 text-center">Carrinho</h1>
        </Col>
        {/* <Col sm={12}></Col> */}
      </Row>
    </ContainerApp>
  )
}
