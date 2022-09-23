import { SetStateAction } from "react";

export type LoginUsuarioDataTypes = {
  email: string;
  senha: string;
}

export type UsuarioTypes = { 
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

export type UsuarioDataTypes = UsuarioTypes & { 
  id: string;
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
  criarUsuario: (usuario: UsuarioTypes) => void;
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
}
