import * as yup from "yup";
import { UsuarioFormTypes } from "../types/types";

export const validationSchemaFormUsuario = yup.object({
  nome: yup
    .string()
    .required('Campo senha vazio'),
  email: yup
    .string()
    .required('Campo email vazio')
    .email('Email invalido'),
  usuario: yup
    .string()
    .required('Campo senha vazio'),
  senha: yup
    .string()
    .required('Campo senha vazio')
    .min(8, 'Minimo de 8 caracteres'),
  confirmarSenha: yup
    .string()
    .required("Campo confirmação de senha vazio")
    .min(8, 'Minimo de 8 caracteres')
    .when("senha", {
      is: (val: string) => (val && val.length > 0 ? true : false),
      then: yup.string().oneOf(
        [yup.ref("senha")],
        "As senhas não são iguais!"
      )
    }),
  cpf: yup
    .string()
    .required('Campo cpf vazio'),
  rua: yup
    .string()
    .required('Campo rua vazio'),
  numero: yup
    .string()
    .required('Campo numero vazio'),
  complemento: yup
    .string()
    .required('Campo complemento vazio'),
  bairro: yup
    .string()
    .required('Campo bairro vazio'),
  cep: yup
    .string()
    .required('Campo cep vazio'),
  cidade: yup
    .string()
    .required('Campo cidade vazio'),
  estado: yup
    .string()
    .required('Campo estado vazio'),
  dataCadastro: yup
    .date()
    .required('Campo data de cadastro vazio'),
  dataEdicao: yup
    .date()
    .required('Campo data de edição vazio'),
});

export const initialValuesFormUsuario: UsuarioFormTypes = {
  id: "",
  nome: "",
  email: "",
  usuario: "",
  senha: "",
  confirmarSenha: "",
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
  dataEdicao: new Date(),
};
