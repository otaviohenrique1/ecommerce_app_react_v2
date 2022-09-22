import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Homepage'
import Login from './Login'
import NovoCadastro from './NovoCadastro'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/novo_cadastro" element={<NovoCadastro />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  )
}
