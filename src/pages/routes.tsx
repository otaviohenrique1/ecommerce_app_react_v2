import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Carrinho from './Carrinho'
import Favoritos from './Favoritos'
import Historico from './Historico'
import Homepage from './Homepage'
import Login from './Login'
import NovoCadastro from './NovoCadastro'
import Perfil from './Perfil'
import PerfilEdicao from './PerfilEdicao'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/novo_cadastro" element={<NovoCadastro />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/perfil_edicao" element={<PerfilEdicao />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/historico" element={<Historico />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
    </BrowserRouter>
  )
}
