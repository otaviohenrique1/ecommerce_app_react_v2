import { createContext, FC, ReactNode, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CarrinhoCompras, UsuarioBase, UsuarioContextType, UsuarioDataTypes } from '../types/types';
import { initialValuesFormUsuario } from '../utils/constants';

export const UsuarioContext = createContext<UsuarioContextType | null>(null);

export type UsuarioProviderProps = {
  children: ReactNode;
}

export const UsuarioProvider: FC<UsuarioProviderProps> = ({ children }) => {
  const [usuario, setUsuario] = useState<UsuarioDataTypes>(initialValuesFormUsuario);
  const [usuarios, setUsuarios] = useState<UsuarioDataTypes[]>([]);
  const [carrinhoProdutos, setCarrinhoProdutos] = useState<CarrinhoCompras[]>([]);

  const criarUsuario = (usuario: UsuarioDataTypes) => {
    setUsuario({
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      usuario: usuario.usuario,
      senha: usuario.senha,
      cpf: usuario.cpf,
      telefone: usuario.telefone,
      rua: usuario.rua,
      numero: usuario.numero,
      complemento: usuario.complemento,
      bairro: usuario.bairro,
      cep: usuario.cep,
      cidade: usuario.cidade,
      estado: usuario.estado,
      dataCadastro: usuario.dataCadastro,
      dataEdicao: usuario.dataEdicao,
    })
  };

  const editarUsuario = (usuario: UsuarioDataTypes) => {
    setUsuario({
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      usuario: usuario.usuario,
      senha: usuario.senha,
      cpf: usuario.cpf,
      telefone: usuario.telefone,
      rua: usuario.rua,
      numero: usuario.numero,
      complemento: usuario.complemento,
      bairro: usuario.bairro,
      cep: usuario.cep,
      cidade: usuario.cidade,
      estado: usuario.estado,
      dataCadastro: usuario.dataCadastro,
      dataEdicao: usuario.dataEdicao,
    })
  };

  const editarUsuarioDaLista = (id: string, usuario: UsuarioDataTypes) => {
    let resultado = usuarios.map((item_busca) => {
      if (item_busca.id === id) {
        return {
          ...item_busca,
          id: usuario.id,
          nome: usuario.nome,
          email: usuario.email,
          usuario: usuario.usuario,
          senha: usuario.senha,
          cpf: usuario.cpf,
          telefone: usuario.telefone,
          rua: usuario.rua,
          numero: usuario.numero,
          complemento: usuario.complemento,
          bairro: usuario.bairro,
          cep: usuario.cep,
          cidade: usuario.cidade,
          estado: usuario.estado,
          dataCadastro: usuario.dataCadastro,
          dataEdicao: new Date(),
        }
      }
      return item_busca;
    });
    setUsuarios(resultado);
  };

  const loginUsuario = (email: string, senha: string) => {
    if (email !== usuario.email) {
      return {
        auth_token: "",
        encontrou: false,
        mensagem: "Erro, email ou senha não encontrado(s)",
        status_code: 404
      };
    }

    if (senha !== usuario.senha) {
      return {
        auth_token: "",
        encontrou: false,
        mensagem: "Erro, email ou senha não encontrado(s)",
        status_code: 404
      };
    }

    return {
      auth_token: `auth_token-${uuidv4().toString()}`,
      encontrou: true,
      mensagem: "Login realizado com sucesso!",
      status_code: 200
    };
  };

  const loginUsuario2 = (email: string, senha: string) => {
    let usuarioLoginBusca = usuarios.find((itemBusca) => {
      return email === itemBusca.email && senha === itemBusca.senha;
    });
    if (usuarioLoginBusca) {
      return {
        auth_token: `auth_token-${uuidv4().toString()}`,
        encontrou: true,
        mensagem: "Login realizado com sucesso!",
        status_code: 200
      };
    }
    return {
      auth_token: "",
      encontrou: false,
      mensagem: "Erro, email ou senha não encontrado(s)",
      status_code: 404
    };
  };

  const criarUsuario2 = (usuario: UsuarioBase) => {
    setUsuario({
      id: uuidv4().toString(),
      nome: usuario.nome,
      email: usuario.email,
      usuario: usuario.usuario,
      senha: usuario.senha,
      cpf: usuario.cpf,
      telefone: usuario.telefone,
      rua: usuario.rua,
      numero: usuario.numero,
      complemento: usuario.complemento,
      bairro: usuario.bairro,
      cep: usuario.cep,
      cidade: usuario.cidade,
      estado: usuario.estado,
      dataCadastro: new Date(),
      dataEdicao: new Date(),
    })
  };

  const adicionarCarrinho = (produto: CarrinhoCompras) => {
    let resultado = carrinhoProdutos.find((item) => {
      return item.codigo === produto.codigo;
    });

    if (resultado) {
      return;
    }

    setCarrinhoProdutos([...carrinhoProdutos, produto]);
  };

  const editarCarrinho = (codigo: string, produto: CarrinhoCompras) => {
    let resultado = carrinhoProdutos.map((item) => {
      if (item.codigo === codigo) {
        return {
          ...item,
          codigo: produto.codigo,
          nome: produto.nome,
          preco: produto.preco,
          precoUnidade: produto.precoUnidade,
          quantidade: produto.quantidade,
        }
      }
      return item;
    });
    setCarrinhoProdutos(resultado);
  };

  const removerCarrinho = (codigo: string) => {
    let resultado = carrinhoProdutos.filter((item) => {
      return item.codigo !== codigo;
    });
    setCarrinhoProdutos(resultado);
  };

  const limparCarrinho = () => {
    setCarrinhoProdutos([]);
  };
  
  return (
    <UsuarioContext.Provider
      value={{
        usuario,
        usuarios,
        setUsuario,
        setUsuarios,
        criarUsuario,
        editarUsuario,
        editarUsuarioDaLista,
        loginUsuario,
        loginUsuario2,
        criarUsuario2,
        carrinhoProdutos,
        setCarrinhoProdutos,
        adicionarCarrinho,
        editarCarrinho,
        removerCarrinho,
        limparCarrinho
      }}
    >{children}</UsuarioContext.Provider>
  );
}
