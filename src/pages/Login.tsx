import { FormikHelpers, useFormik } from 'formik';
import { Col, Container, Form, Row, ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import { Flex } from '../components/Flex';
import { initialValuesFormLogin, validationSchemaFormLogin, } from '../utils/constants';
import { useNavigate } from "react-router-dom";
import { LoginUsuarioDataTypes, UsuarioContextType } from '../types/types';
import { useContext } from 'react';
import { UsuarioContext } from '../context/usuarioContext';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function Login() {
  const navigate = useNavigate();
  const SwalModal = withReactContent(Swal);

  const { loginUsuario } = useContext(UsuarioContext || null) as UsuarioContextType;

  const formik = useFormik({
    initialValues: initialValuesFormLogin,
    validationSchema: validationSchemaFormLogin,
    onSubmit: (values: LoginUsuarioDataTypes, formikHelpers: FormikHelpers<LoginUsuarioDataTypes>) => {
      let resultado = loginUsuario(values.email, values.senha);
      if (!resultado.encontrou) {
        return SwalModal.fire({
          title: "Erro",
          icon: "error",
          html: <p>{resultado.mensagem}</p>,
          confirmButtonText: "Fechar",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-danger"
          }
        });
      }
      navigate("/homepage");
      // console.log(values);
      // console.log(resultado);
    }
  });

  const formularioCampos = [
    {
      controlId: "email", value: formik.values.email, label: "Email",
      type: "email", placeholder: "Digite o email", name: "email",
      errors: formik.errors.email, touched: formik.touched.email
    },
    {
      controlId: "senha", value: formik.values.senha, label: "Senha",
      type: "password", placeholder: "Digite a senha", name: "senha",
      errors: formik.errors.senha, touched: formik.touched.senha
    },
  ];

  return (
    <Container fluid className="my-5">
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Row>
          <Col sm={12} className="pb-5">
            <Flex
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
            >
              <h1 className="text-center">Login</h1>
            </Flex>
          </Col>
          <Col sm={12}>
            <Form onSubmit={formik.handleSubmit}>
              {formularioCampos.map((item, index) => (
                <Form.Group
                  key={index}
                  controlId={item.controlId}
                  onChange={formik.handleChange}
                  defaultValue={item.value}
                  className="mb-3"
                >
                  <Form.Label>{item.label}</Form.Label>
                  <Form.Control
                    type={item.type}
                    name={item.name}
                    placeholder={item.placeholder}
                    // defaultValue={item.defaultValue}
                    defaultValue={item.value}
                    value={item.value}
                  />
                  {item.errors && item.touched ? (
                    <Form.Text className="text-danger">
                      {item.errors}
                    </Form.Text>
                  ) : null}
                </Form.Group>
              ))}
              <Form.Group
                className="mb-3"
                controlId="manter_conectado"
              >
                <Form.Check
                  type="checkbox"
                  name="manter_conectado"
                  label="Manter conectado"
                  defaultChecked={false}
                />
              </Form.Group>
              <ButtonGroup className="w-100 my-2">
                <Button
                  variant="primary"
                  type="submit"
                >Entrar</Button>
                <Button
                  variant="danger"
                  type="button"
                  onClick={() => formik.resetForm()}
                >Limpar</Button>
              </ButtonGroup>
              <Button
                variant="success"
                type="button"
                className="w-100"
                onClick={() => navigate("/novo_cadastro")}
              >Novo cadastro</Button>
            </Form>
          </Col>
        </Row>
      </Flex>
    </Container>
  );
}
