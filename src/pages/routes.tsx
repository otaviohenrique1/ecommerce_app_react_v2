import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UsuarioContext } from '../context/usuarioContext';
import { UsuarioContextType } from '../types/types';
import Carrinho from './Carrinho';
import Favoritos from './Favoritos';
import FinalizacaoCompra from './FinalizacaoCompra';
import Historico from './Historico';
import Homepage from './Homepage';
import Login from './Login';
import NovoCadastro from './NovoCadastro';
import Pagamento from './Pagamento';
import { Pagina404 } from './Pagina404';
import Perfil from './Perfil';
import PerfilEdicao from './PerfilEdicao';
import ProdutoDados from './ProdutoDados';

export default function AppRoutes() {
  const { usuarioDataContext } = useContext(UsuarioContext || null) as UsuarioContextType;

  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, "outlet"> = {
    isAuthenticated: usuarioDataContext.length !== 0,
    authenticationPath: "/",
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/novo_cadastro" element={<NovoCadastro />} />
        <Route path="*" element={<Pagina404 />} />
        <Route path="/homepage" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<Homepage />} />} />
        <Route path="/perfil" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<Perfil />} />} />
        <Route path="/perfil_edicao" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<PerfilEdicao />} />} />
        <Route path="/favoritos" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<Favoritos />} />} />
        <Route path="/historico" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<Historico />} />} />
        <Route path="/carrinho" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<Carrinho />} />} />
        <Route path="/produto/:codigo" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<ProdutoDados />} />} />
        <Route path="/pagamento" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<Pagamento />} />} />
        <Route path="/finalizacao_compra" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<FinalizacaoCompra />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
  outlet: JSX.Element;
};

export function ProtectedRoute({
  isAuthenticated,
  authenticationPath,
  outlet,
}: ProtectedRouteProps) {
  if (isAuthenticated) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
}
