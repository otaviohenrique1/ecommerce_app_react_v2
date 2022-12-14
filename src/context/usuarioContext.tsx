import { createContext, FC, ReactNode, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CarrinhoCompras, Favorito, Historico, HistoricoLista, UsuarioBase, UsuarioContextType, UsuarioDataTypes } from '../types/types';
import { initialValuesFormUsuario } from '../utils/constants';

export const UsuarioContext = createContext<UsuarioContextType | null>(null);

export type UsuarioProviderProps = {
  children: ReactNode;
}

export const UsuarioProvider: FC<UsuarioProviderProps> = ({ children }) => {
  const [usuario, setUsuario] = useState<UsuarioDataTypes>(initialValuesFormUsuario);
  const [usuarios, setUsuarios] = useState<UsuarioDataTypes[]>([]);
  const [carrinhoProdutos, setCarrinhoProdutos] = useState<CarrinhoCompras[]>([]);
  const [favoritos, setFavoritos] = useState<Favorito[]>([]);
  const [usuarioDataContext, setUsuarioDataContext] = useState<string>("");
  const [authToken, setAuthToken] = useState<string>("");
  const [historicoLista, setHistoricoLista] = useState<HistoricoLista[]>([]);

  useEffect(() => {
    // 
  }, []);

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
        mensagem: "Erro, email ou senha n??o encontrado(s)",
        status_code: 404
      };
    }

    if (senha !== usuario.senha) {
      return {
        auth_token: "",
        encontrou: false,
        mensagem: "Erro, email ou senha n??o encontrado(s)",
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
      mensagem: "Erro, email ou senha n??o encontrado(s)",
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
        }
      }
      return item;
    });
    setCarrinhoProdutos(resultado);
  };

  const removerCarrinho = (id: number) => {
    let resultado = carrinhoProdutos.filter((item, index) => {
      return index !== id;
    });
    setCarrinhoProdutos(resultado);
  };

  const limparCarrinho = () => {
    setCarrinhoProdutos([]);
  };

  const adicionarFavorito = (favorito: Favorito) => {
    let favoritoBusca = favoritos.find((itemBusca) => {
      return itemBusca.codigo === favorito.codigo;
    });

    if (favoritoBusca) {
      return;
    }

    setFavoritos([
      ...favoritos,
      {
        codigo: favorito.codigo,
        nome: favorito.nome,
        preco: favorito.preco,
      }
    ]);
  };

  const removerFavorito = (codigo: string) => {
    let resultado = favoritos.filter((item) => item.codigo !== codigo);
    setFavoritos(resultado);
  };

  const listarFavoritos = () => {
    return favoritos;
  };

  const adicionarAuthToken = (auth_token: string) => {
    setAuthToken(auth_token);
  };

  const exibirAuthToken = () => {
    return authToken;
  };

  const removerAuthToken = () => {
    setAuthToken("");
  };

  const adicionarHistorico = (historico: Historico) => {
    let historicoBusca = historicoLista.find((itemBusca) => {
      return itemBusca.codigo === historico.codigo;
    });

    if (historicoBusca) {
      let resultado = historicoLista.map((item) => {
        if (item.codigo === historico.codigo) {
          return {
            ...item,
            codigo: historico.codigo,
            nome: historico.nome,
            preco: historico.preco,
            data: new Date(),
          }
        }
        return item;
      });
      setCarrinhoProdutos(resultado);
    }

    setHistoricoLista([
      ...historicoLista,
      {
        codigo: historico.codigo,
        nome: historico.nome,
        preco: historico.preco,
        data: new Date(),
      }
    ]);
  };

  const listarHistorico = () => {
    return historicoLista;
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
        adicionarAuthToken,
        exibirAuthToken,
        removerAuthToken,
        criarUsuario2,
        carrinhoProdutos,
        setCarrinhoProdutos,
        adicionarCarrinho,
        editarCarrinho,
        removerCarrinho,
        limparCarrinho,
        adicionarFavorito,
        removerFavorito,
        listarFavoritos,
        usuarioDataContext,
        setUsuarioDataContext,
        adicionarHistorico,
        listarHistorico
      }}
    >{children}</UsuarioContext.Provider>
  );
}
