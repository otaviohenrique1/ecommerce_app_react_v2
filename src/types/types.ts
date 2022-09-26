import { SetStateAction } from "react";

export type LoginUsuarioDataTypes = {
  email: string;
  senha: string;
}

export type UsuarioDataTypes = { 
  id: string;
  nome: string;
  email: string;
  usuario: string;
  senha: string;
  cpf: string;
  telefone: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cep: string;
  cidade: string;
  estado: string;
  dataCadastro: Date;
  dataEdicao: Date;
}

export type UsuarioContextType = { 
  usuario: UsuarioDataTypes;
  usuarios: UsuarioDataTypes[];
  setUsuario: (value: SetStateAction<UsuarioDataTypes>) => void;
  setUsuarios: (value: SetStateAction<UsuarioDataTypes[]>) => void;
  criarUsuario: (usuario: UsuarioDataTypes) => void;
  editarUsuario: (usuario: UsuarioDataTypes) => void;
  editarUsuarioDaLista: (id: string, usuario: UsuarioDataTypes) => void;
  loginUsuario: (email: string, senha: string) => {
    auth_token: string;
    encontrou: boolean;
    mensagem: string;
    status_code: number;
  };
  loginUsuario2: (email: string, senha: string) => {
    auth_token: string;
    encontrou: boolean;
    mensagem: string;
    status_code: number;
  };
  criarUsuario2: (usuario: UsuarioBase) => void;
}

export type UsuarioBase = {
  nome: string;
  email: string;
  usuario: string;
  senha: string;
  cpf: string;
  telefone: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cep: string;
  cidade: string;
  estado: string;
}

export type UsuarioData = UsuarioBase & { 
  id: string;
  dataCadastro: Date;
  dataEdicao: Date;
}

export interface ListaProdutoTypes {
  codigo: number;
  nome: string;
  preco: number;
  quantidade: number;
  tipo: string;
  marca: string;
}
