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
  setUsuario: (value: SetStateAction<UsuarioDataTypes>) => void;
  usuarios: UsuarioDataTypes[];
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
  adicionarAuthToken: (auth_token: string) => void;
  exibirAuthToken: () => string;
  removerAuthToken: () => void;
  adicionarCarrinho: (produto: CarrinhoCompras) => void;
  editarCarrinho: (codigo: string, produto: CarrinhoCompras) => void;
  removerCarrinho: (id: number) => void;
  limparCarrinho: () => void;
  carrinhoProdutos: CarrinhoCompras[];
  setCarrinhoProdutos: (value: SetStateAction<CarrinhoCompras[]>) => void;
  adicionarFavorito: (favorito: Favorito) => void;
  removerFavorito: (codigo: string) => void;
  listarFavoritos: () => Favorito[];
  usuarioDataContext: string;
  setUsuarioDataContext: (value: SetStateAction<string>) => void;
  adicionarHistorico: (historico: Historico) => void;
  listarHistorico: () => HistoricoLista[];
}

export interface Historico {
  codigo: string;
  nome: string;
  preco: number;
}

export interface HistoricoLista {
  codigo: string;
  nome: string;
  preco: number;
  data: Date;
}

export interface Favorito {
  codigo: string;
  nome: string;
  preco: number;
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

export type UsuarioForm = UsuarioBase & { 
  confirmarSenha: string;
}

export type CarrinhoCompras = { 
  codigo: string;
  nome: string;
  preco: number;
}

export interface Produto {
  codigo: string;
  nome: string;
  preco: number;
  marca: string;
  tipo: string;
}
