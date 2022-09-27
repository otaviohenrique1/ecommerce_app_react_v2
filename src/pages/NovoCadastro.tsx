import { FormikHelpers, useFormik } from 'formik';
import { Col, Container, Form, Row, ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import { Flex } from '../components/Flex';
import { validaBairro, validaCEP, validaCidade, validaComplemento, validaConfirmarSenha, validaCPF, validaEmail, validaEstado, validaNome, validaNumero, validaRua, validaSenha, validaUsuario, } from '../utils/constants';
import { useNavigate } from "react-router-dom";
import { UsuarioBase, UsuarioContextType } from '../types/types';
import { estadosDoBrasil } from '../utils/listas';
import { useContext } from 'react';
import { UsuarioContext } from '../context/usuarioContext';
import * as yup from "yup";

type UsuarioForm = UsuarioBase & { 
  confirmarSenha: string;
}

const initialValuesUsuarioForm: UsuarioForm = {
  nome: "", email: "", usuario: "", senha: "", confirmarSenha: "", cpf: "",
  telefone: "", rua: "", numero: "", complemento: "", bairro: "", cep: "",
  cidade: "", estado: ""
};

const validationSchemaUsuarioForm = yup.object({
  nome: validaNome, email: validaEmail, usuario: validaUsuario,
  senha: validaSenha, confirmarSenha: validaConfirmarSenha,
  cpf: validaCPF, rua: validaRua, numero: validaNumero,
  complemento: validaComplemento, bairro: validaBairro,
  cep: validaCEP, cidade: validaCidade, estado: validaEstado,
});

export default function NovoCadastro() {
  const navigate = useNavigate();
  
  const { criarUsuario2 } = useContext(UsuarioContext || null) as UsuarioContextType;

  const formik = useFormik({
    initialValues: initialValuesUsuarioForm,
    validationSchema: validationSchemaUsuarioForm,
    onSubmit: (values: UsuarioForm, formikHelpers: FormikHelpers<UsuarioForm>) => {
      criarUsuario2({
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
      formikHelpers.resetForm();
      navigate("/");
      // console.log(values);
    }
  });

  const formularioCampos = [
    {
      controlId: "nome",
      value: formik.values.nome,
      label: "Nome",
      type: "text",
      placeholder: "Digite o nome",
      name: "nome",
      errors: formik.errors.nome,
      touched: formik.touched.nome
    },
    {
      controlId: "email",
      value: formik.values.email,
      label: "Email",
      type: "email",
      placeholder: "Digite o email",
      name: "email",
      errors: formik.errors.email,
      touched: formik.touched.email
    },
    {
      controlId: "senha",
      value: formik.values.senha,
      label: "Senha",
      type: "password",
      placeholder: "Digite a senha",
      name: "senha",
      errors: formik.errors.senha,
      touched: formik.touched.senha
    },
    {
      controlId: "confirmarSenha",
      value: formik.values.confirmarSenha,
      label: "Confirme a senha",
      type: "password",
      placeholder: "Digite a senha novamente",
      name: "confirmarSenha",
      errors: formik.errors.confirmarSenha,
      touched: formik.touched.confirmarSenha
    },
    {
      controlId: "cpf",
      value: formik.values.cpf,
      label: "CPF",
      type: "text",
      placeholder: "Digite o numero do CPF",
      name: "cpf",
      errors: formik.errors.cpf,
      touched: formik.touched.cpf
    },
    {
      controlId: "telefone",
      value: formik.values.telefone,
      label: "Telefone",
      type: "number",
      placeholder: "Digite o numero do telefone",
      name: "telefone",
      errors: formik.errors.telefone,
      touched: formik.touched.telefone
    },
    {
      controlId: "rua",
      value: formik.values.rua,
      label: "Rua",
      type: "text",
      placeholder: "Digite o nome da rua",
      name: "rua",
      errors: formik.errors.rua,
      touched: formik.touched.rua
    },
    {
      controlId: "numero",
      value: formik.values.numero,
      label: "Numero",
      type: "number",
      placeholder: "Digite o numero do endereço",
      name: "numero",
      errors: formik.errors.numero,
      touched: formik.touched.numero
    },
    {
      controlId: "complemento",
      value: formik.values.complemento,
      label: "Complemento",
      type: "text",
      placeholder: "Digite o complemento do endereço",
      name: "complemento",
      errors: formik.errors.complemento,
      touched: formik.touched.complemento
    },
    {
      controlId: "bairro",
      value: formik.values.bairro,
      label: "Bairro",
      type: "text",
      placeholder: "Digite o nome do bairro",
      name: "bairro",
      errors: formik.errors.bairro,
      touched: formik.touched.bairro
    },
    {
      controlId: "cep",
      value: formik.values.cep,
      label: "CEP",
      type: "number",
      placeholder: "Digite o numero do cep",
      name: "cep",
      errors: formik.errors.cep,
      touched: formik.touched.cep
    },
    {
      controlId: "cidade",
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
              <h1 className="text-center">Novo Cadastro</h1>
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
                    // defaultValue={item.value}
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
                controlId="estado"
                onChange={formik.handleChange}
                defaultValue={formik.values.estado}
              >
                <Form.Label>Estado</Form.Label>
                <Form.Select
                  aria-label="Estado select"
                  name="estado"
                  value={formik.values.estado}
                  onChange={formik.handleChange}
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
              <ButtonGroup className="w-100 my-2">
                <Button
                  variant="primary"
                  type="submit"
                >Salvar</Button>
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
                onClick={() => navigate("/")}
              >Voltar</Button>
              <Button
                variant="secondary"
                type="button"
                className="w-100 mt-2"
                onClick={() => {
                  formik.setFieldValue("nome", "Jeca");
                  formik.setFieldValue("email", "jeca@email.com");
                  formik.setFieldValue("usuario", "jeca123");
                  formik.setFieldValue("senha", "jeca1234");
                  formik.setFieldValue("confirmarSenha", "jeca1234");
                  formik.setFieldValue("cpf", "11111111111");
                  formik.setFieldValue("telefone", "11111111");
                  formik.setFieldValue("rua", "Rua do Centro");
                  formik.setFieldValue("numero", "123");
                  formik.setFieldValue("complemento", "Casa");
                  formik.setFieldValue("bairro", "Bairro do Centro");
                  formik.setFieldValue("cep", "11111111");
                  formik.setFieldValue("cidade", "Cachoeira");
                  formik.setFieldValue("estado", "SP");
                }}
              >Dados</Button>
            </Form>
          </Col>
        </Row>
      </Flex>
    </Container>
  );
}
