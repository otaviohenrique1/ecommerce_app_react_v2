import { Button, ButtonGroup, Col, Container, Form, Row } from 'react-bootstrap';
import ContainerApp from '../components/ContainerApp';
import * as yup from "yup";
import { useFormik } from 'formik';
import { Flex } from '../components/Flex';
import { useNavigate } from "react-router-dom";

interface PagamentoForm {
  formaPagamento: string;
}

const initialValuesPagamentoForm: PagamentoForm = {
  formaPagamento: "",
};

const validationSchemaPagamentoForm = yup.object().shape({
  formaPagamento: yup.string().required("Campo vazio")
});

export default function Pagamento() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialValuesPagamentoForm,
    validationSchema: validationSchemaPagamentoForm,
    onSubmit: (values, formikHelpers) => {
      navigate("/homepage");
    }
  });

  const listaFormaPagamentos = [
    { value: "pix", label: "Pix" },
    { value: "boleto", label: "Boleto" },
    { value: "cartao_credito", label: "Cartão de crédito" },
  ];

  return (
    <ContainerApp>
      <Container>
        <Row>
          <Col sm={12}>
            <h1 className="mt-3 mb-5 text-center">Finalizar Compra</h1>
          </Col>
          <Col sm={12}>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="estado"
                onChange={formik.handleChange}
                defaultValue={formik.values.formaPagamento}
              >
                <Form.Label>Formas de pagamento</Form.Label>
                <Form.Select
                  aria-label="Estado select"
                  name="estado"
                  value={formik.values.formaPagamento}
                  // onChange={formik.handleChange}
                >
                  <option value="">Selecione</option>
                  {listaFormaPagamentos.map((item, index) => (
                    <option
                      key={index}
                      value={item.value}
                    >{item.label}</option>
                  ))}
                </Form.Select>
                {formik.errors.formaPagamento && formik.touched.formaPagamento ? (
                  <Form.Text className="text-danger">
                    {formik.errors.formaPagamento}
                  </Form.Text>
                ) : null}
              </Form.Group>
              <Flex justifyContent="end" alignItems="center" flexDirection="row">
                <ButtonGroup>
                  <Button
                    type="submit"
                    variant="success"
                    size="sm"
                  >Finalizar compra</Button>
                  <Button
                    type="reset"
                    variant="danger"
                    size="sm"
                  >Limpar</Button>
                </ButtonGroup>
              </Flex>
            </Form>
          </Col>
          <Col sm={12}></Col>
        </Row>
      </Container>
    </ContainerApp>
  );
}
