import * as yup from "yup";
import { LoginUsuarioDataTypes, UsuarioBase, UsuarioDataTypes } from "../types/types";

export const validaId = yup.string().required('Campo id vazio');
export const validaNome = yup.string().required('Campo senha vazio');
export const validaEmail = yup.string().required('Campo email vazio').email('Email invalido');
export const validaSenha = yup.string().required('Campo senha vazio').min(8, 'Minimo de 8 caracteres');
export const validaUsuario = yup.string().required('Campo senha vazio');
export const validaConfirmarSenha = yup
  .string()
  .required("Campo confirmação de senha vazio")
  .min(8, 'Minimo de 8 caracteres')
  .when("senha", {
    is: (val: string) => (val && val.length > 0 ? true : false),
    then: yup.string().oneOf([yup.ref("senha")], "As senhas não são iguais!")
  });
export const validaCPF = yup.string().required('Campo cpf vazio');
export const validaRua = yup.string().required('Campo rua vazio');
export const validaNumero = yup.string().required('Campo numero vazio');
export const validaComplemento = yup.string().required('Campo complemento vazio');
export const validaBairro = yup.string().required('Campo bairro vazio');
export const validaCEP = yup.string().required('Campo cep vazio');
export const validaCidade = yup.string().required('Campo cidade vazio');
export const validaEstado = yup.string().required('Campo estado vazio');
export const validaDataCadastro = yup.date().required('Campo data de cadastro vazio');
export const validaDataEdicao = yup.date().required('Campo data de edição vazio');

export const validationSchemaFormLogin = yup.object({
  email: validaEmail,
  senha: validaSenha,
});

export const validationSchemaFormUsuario = yup.object({
  id: validaId,
  nome: validaNome,
  email: validaEmail,
  usuario: validaUsuario,
  senha: validaSenha,
  confirmarSenha: validaConfirmarSenha,
  cpf: validaCPF,
  rua: validaRua,
  numero: validaNumero,
  complemento: validaComplemento,
  bairro: validaBairro,
  cep: validaCEP,
  cidade: validaCidade,
  estado: validaEstado,
  dataCadastro: validaDataCadastro,
  dataEdicao: validaDataEdicao,
});

export const validationSchemaUsuarioForm = yup.object({
  nome: validaNome,
  email: validaEmail,
  usuario: validaUsuario,
  senha: validaSenha,
  confirmarSenha: validaConfirmarSenha,
  cpf: validaCPF,
  rua: validaRua,
  numero: validaNumero,
  complemento: validaComplemento,
  bairro: validaBairro,
  cep: validaCEP,
  cidade: validaCidade,
  estado: validaEstado,
});

export const initialValuesFormLogin: LoginUsuarioDataTypes = {
  email: "",
  senha: "",
};

export const initialValuesFormUsuario: UsuarioDataTypes = {
  id: "",
  nome: "",
  email: "",
  usuario: "",
  senha: "",
  // confirmarSenha: "",
  cpf: "",
  telefone: "",
  rua: "",
  numero: "",
  complemento: "",
  bairro: "",
  cep: "",
  cidade: "",
  estado: "",
  dataCadastro: new Date(),
  dataEdicao: new Date()
};

export const initialValuesUsuarioBase: UsuarioBase = {
  nome: "",
  email: "",
  usuario: "",
  senha: "",
  // confirmarSenha: "",
  cpf: "",
  telefone: "",
  rua: "",
  numero: "",
  complemento: "",
  bairro: "",
  cep: "",
  cidade: "",
  estado: ""
};
