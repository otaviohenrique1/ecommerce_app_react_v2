import { Button, ButtonGroup, Col, Container, Form, ListGroup, Row } from 'react-bootstrap';
import ContainerApp from '../components/ContainerApp';
import * as yup from "yup";
import { useFormik } from 'formik';
import { Flex } from '../components/Flex';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useContext } from 'react';
import { UsuarioContext } from '../context/usuarioContext';
import { UsuarioContextType } from '../types/types';
import { ItemLista } from '../components/ItemLista';

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
  const { usuario } = useContext(UsuarioContext || null) as UsuarioContextType;
  const SwalModal = withReactContent(Swal);

  const formik = useFormik({
    initialValues: initialValuesPagamentoForm,
    validationSchema: validationSchemaPagamentoForm,
    onSubmit: (values, formikHelpers) => {
      SwalModal.fire({
        title: "Aviso",
        icon: "question",
        html: <p>Confirmar a compra</p>,
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
          navigate("/finalizacao_compra");
        }
      });
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
          <Col sm={12}>
            <h2 className="text-center">Contato</h2>
            <ListGroup>
              <ItemLista label="E-mail:" valor={usuario.email} />
              <ItemLista label="Telefone:" valor={usuario.telefone} />
            </ListGroup>
          </Col>
          <Col sm={12}>
            <h2 className="text-center">Endereço</h2>
            <ListGroup>
              <ItemLista label="Rua:" valor={usuario.rua} />
              <ItemLista label="Numero:" valor={usuario.numero} />
              <ItemLista label="Complemento:" valor={usuario.complemento} />
              <ItemLista label="Bairro:" valor={usuario.bairro} />
              <ItemLista label="CEP:" valor={usuario.cep} />
              <ItemLista label="Cidade:" valor={usuario.cidade} />
              <ItemLista label="Estado:" valor={usuario.estado} />
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </ContainerApp>
  );
}
