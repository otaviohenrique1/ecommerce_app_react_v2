import { FormikHelpers, useFormik } from 'formik';
import { useContext } from 'react';
import { Button, ButtonGroup, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Flex } from '../components/Flex';
import { UsuarioContext } from '../context/usuarioContext';
import { UsuarioContextType, UsuarioFormTypes } from '../types/types';
import { initialValuesFormUsuario, validationSchemaFormUsuario } from '../utils/constants';
import { estadosDoBrasil } from '../utils/listas';

export default function NovoCadastro() {
  const navigate = useNavigate();

  const { criarUsuario } = useContext(UsuarioContext || null) as UsuarioContextType;

  const formik = useFormik({
    initialValues: initialValuesFormUsuario,
    validationSchema: validationSchemaFormUsuario,
    onSubmit: (values: UsuarioFormTypes, helpers: FormikHelpers<UsuarioFormTypes>) => {
      criarUsuario({
        nome: values.nome,
        email: values.email,
        usuario: values.usuario,
        senha: values.senha,
        cpf: values.cpf,
        telefone: values.telefone,
        rua: values.rua,
        numero: values.numero,
        complemento: values.complemento,
        bairro: values.bairro,
        cep: values.cep,
        cidade: values.cidade,
        estado: values.estado,
      });
      helpers.resetForm();
      navigate("/");
    }
  });

  const formularioCampos = [
    {
      md: 6,
      sm: 12,
      className: "mb-3",
      controlId: "nome",
      onChange: formik.handleChange,
      defaultValue: formik.values.nome,
      value: formik.values.nome,
      label: "Nome",
      type: "text",
      placeholder: "Digite o nome",
      name: "nome",
      errors: formik.errors.nome,
      touched: formik.touched.nome
    },
    {
      md: 6,
      sm: 12,
      className: "mb-3",
      controlId: "email",
      onChange: formik.handleChange,
      defaultValue: formik.values.email,
      value: formik.values.email,
      label: "Email",
      type: "email",
      placeholder: "Digite o email",
      name: "email",
      errors: formik.errors.email,
      touched: formik.touched.email
    },
    {
      md: 4,
      sm: 12,
      className: "mb-3",
      controlId: "senha",
      onChange: formik.handleChange,
      defaultValue: formik.values.senha,
      value: formik.values.senha,
      label: "Senha",
      type: "password",
      placeholder: "Digite a senha",
      name: "senha",
      errors: formik.errors.senha,
      touched: formik.touched.senha
    },
    {
      md: 4,
      sm: 12,
      className: "mb-3",
      controlId: "confirmarSenha",
      onChange: formik.handleChange,
      defaultValue: formik.values.confirmarSenha,
      value: formik.values.confirmarSenha,
      label: "Confirme a senha",
      type: "password",
      placeholder: "Digite a senha novamente",
      name: "confirmarSenha",
      errors: formik.errors.confirmarSenha,
      touched: formik.touched.confirmarSenha
    },
    {
      md: 4,
      sm: 12,
      className: "mb-3",
      controlId: "cpf",
      onChange: formik.handleChange,
      defaultValue: formik.values.cpf,
      value: formik.values.cpf,
      label: "CPF",
      type: "text",
      placeholder: "Digite o numero do CPF",
      name: "cpf",
      errors: formik.errors.cpf,
      touched: formik.touched.cpf
    },
    {
      md: 3,
      sm: 12,
      className: "mb-3",
      controlId: "telefone",
      onChange: formik.handleChange,
      defaultValue: formik.values.telefone,
      value: formik.values.telefone,
      label: "Telefone",
      type: "number",
      placeholder: "Digite o numero do telefone",
      name: "telefone",
      errors: formik.errors.telefone,
      touched: formik.touched.telefone
    },
    {
      md: 6,
      sm: 12,
      className: "mb-3",
      controlId: "rua",
      onChange: formik.handleChange,
      defaultValue: formik.values.rua,
      value: formik.values.rua,
      label: "Rua",
      type: "text",
      placeholder: "Digite o nome da rua",
      name: "rua",
      errors: formik.errors.rua,
      touched: formik.touched.rua
    },
    {
      md: 3,
      sm: 12,
      className: "mb-3",
      controlId: "numero",
      onChange: formik.handleChange,
      defaultValue: formik.values.numero,
      value: formik.values.numero,
      label: "Numero",
      type: "password",
      placeholder: "Digite o numero do endereço",
      name: "numero",
      errors: formik.errors.numero,
      touched: formik.touched.numero
    },
    {
      md: 3,
      sm: 12,
      className: "mb-3",
      controlId: "complemento",
      onChange: formik.handleChange,
      defaultValue: formik.values.complemento,
      value: formik.values.complemento,
      label: "Complemento",
      type: "text",
      placeholder: "Digite o complemento do endereço",
      name: "complemento",
      errors: formik.errors.complemento,
      touched: formik.touched.complemento
    },
    {
      md: 6,
      sm: 12,
      className: "mb-3",
      controlId: "bairro",
      onChange: formik.handleChange,
      defaultValue: formik.values.bairro,
      value: formik.values.bairro,
      label: "Bairro",
      type: "text",
      placeholder: "Digite o nome do bairro",
      name: "bairro",
      errors: formik.errors.bairro,
      touched: formik.touched.bairro
    },
    {
      md: 3,
      sm: 12,
      className: "mb-3",
      controlId: "cep",
      onChange: formik.handleChange,
      defaultValue: formik.values.cep,
      value: formik.values.cep,
      label: "CEP",
      type: "number",
      placeholder: "Digite o numero do cep",
      name: "cep",
      errors: formik.errors.cep,
      touched: formik.touched.cep
    },
    {
      md: 6,
      sm: 12,
      className: "mb-3",
      controlId: "cidade",
      onChange: formik.handleChange,
      defaultValue: formik.values.cidade,
      value: formik.values.cidade,
      label: "Cidade",
      type: "text",
      placeholder: "Digite o nome da cidade",
      name: "cidade",
      errors: formik.errors.cidade,
      touched: formik.touched.cidade
    },
  ];

  return (
    <Container fluid className="py-5 px-4">
      <Row>
        <Col sm={12} className="mb-3">
          <Flex
            alignItems="center"
            justifyContent="center"
          >
            <h1>Novo Cadastro</h1>
          </Flex>
        </Col>
        <Col sm={12}>
          <Form
            onSubmit={formik.handleSubmit}
          >
            <Row>
              {formularioCampos.map((item, index) => (
                <Col md={item.md}>
                  <Form.Group
                    key={index}
                    controlId={item.controlId}
                    onChange={item.onChange}
                    defaultValue={item.defaultValue}
                    className={item.className}
                  >
                    <Form.Label>{item.label}</Form.Label>
                    <Form.Control
                      type={item.type}
                      name={item.name}
                      placeholder={item.placeholder}
                      // defaultValue={item.defaultValue}
                      value={item.value}
                    />
                    {item.errors && item.touched ? (
                      <Form.Text className="text-danger">
                        {item.errors}
                      </Form.Text>
                    ) : null}
                  </Form.Group>
                </Col>
              ))}
              <Col md={6} sm={12} xs={12}>
                <Form.Group
                  className="mb-3"
                  controlId="estado"
                  onChange={formik.handleChange}
                  defaultValue={formik.values.estado}
                >
                  <Form.Label>Estado</Form.Label>
                  <Form.Select
                    aria-label="Estado select"
                    name="estado"
                    value={formik.values.estado}
                  >
                    <option value="">Selecione</option>
                    {estadosDoBrasil.map((item, index) => (
                      <option
                        key={index}
                        value={item.value}
                      >{item.label}</option>
                    ))}
                  </Form.Select>
                  {formik.errors.estado && formik.touched.estado ? (
                    <Form.Text className="text-danger">
                      {formik.errors.estado}
                    </Form.Text>
                  ) : null}
                </Form.Group>
              </Col>
              <Col sm={12} md={12} xs={12}>
                <ButtonGroup className="w-100 mt-3">
                  <Button
                    variant="primary"
                    type="submit"
                  >Salvar</Button>
                  <Button
                    variant="danger"
                    type="button"
                    onClick={() => formik.resetForm()}
                  >Limpar</Button>
                  <Button
                    variant="success"
                    type="button"
                    onClick={() => navigate("/")}
                  >Voltar</Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
