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

export type UsuarioFormTypes = UsuarioDataTypes & { 
  confirmarSenha: string;
}

export type UsuarioContextType = { 
  usuario: UsuarioDataTypes;
  usuarios: UsuarioDataTypes[];
  setUsuario: (value: SetStateAction<UsuarioDataTypes>) => void;
  setUsuarios: (value: SetStateAction<UsuarioDataTypes[]>) => void;
  criarUsuario: (usuario: UsuarioDataTypes) => void;
  editarUsuario: (usuario: UsuarioDataTypes) => void;
  editarUsuarioDaLista: (id: string, usuario: UsuarioDataTypes) => void;
}
