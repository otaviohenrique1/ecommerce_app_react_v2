import { createContext, FC, ReactNode, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { UsuarioContextType, UsuarioDataTypes, UsuarioTypes } from '../types/types';
import { initialValuesFormUsuario } from '../utils/constants';

export const UsuarioContext = createContext<UsuarioContextType | null>(null);

export type UsuarioProviderProps = {
  children: ReactNode;
}

export const UsuarioProvider: FC<UsuarioProviderProps> = ({ children }) => {
  const [usuario, setUsuario] = useState<UsuarioDataTypes>(initialValuesFormUsuario);

  const [usuarios, setUsuarios] = useState<UsuarioDataTypes[]>([]);

  const criarUsuario = (usuario: UsuarioTypes) => {
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
    setUsuarios (resultado);
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
        editarUsuarioDaLista
      }}
    >{children}</UsuarioContext.Provider>
  );
}
