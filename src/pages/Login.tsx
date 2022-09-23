import { FormikHelpers, useFormik } from 'formik';
import { Col, Container, Form, Row, ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import { Flex } from '../components/Flex';
import { initialValuesFormLogin, validationSchemaFormLogin,  } from '../utils/constants';
import { useNavigate } from "react-router-dom";
import { LoginUsuarioDataTypes, UsuarioContextType } from '../types/types';
import { useContext } from 'react';
import { UsuarioContext } from '../context/usuarioContext';

export default function Login() {
  const navigate = useNavigate();

  const { loginUsuario } = useContext(UsuarioContext || null) as UsuarioContextType;

  const formik = useFormik({
    initialValues: initialValuesFormLogin,
    validationSchema: validationSchemaFormLogin,
    onSubmit: (values: LoginUsuarioDataTypes, formikHelpers: FormikHelpers<LoginUsuarioDataTypes>) => {
      let resultado = loginUsuario(values.email, values.senha);
      console.log(values);
      console.log(resultado);
      // navigate("/homepage");
    }
  });

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
              <Form.Group
                controlId="email"
                onChange={formik.handleChange}
                defaultValue={formik.values.email}
                className="mb-3"
              >
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="Digite o seu e-mail"
                  // defaultValue={formik.values.email}
                  value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email ? (
                  <Form.Text className="text-danger">
                    {formik.errors.email}
                  </Form.Text>
                ) : null}
              </Form.Group>
              <Form.Group
                controlId="senha"
                onChange={formik.handleChange}
                defaultValue={formik.values.senha}
                className="mb-3"
              >
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  name="senha"
                  placeholder="Digite a sua senha"
                  // defaultValue={formik.values.senha}
                  value={formik.values.senha}
                />
                {formik.errors.senha && formik.touched.senha ? (
                  <Form.Text className="text-danger">
                    {formik.errors.senha}
                  </Form.Text>
                ) : null}
              </Form.Group>
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
