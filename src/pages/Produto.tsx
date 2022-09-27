import { useContext } from 'react';
import { Button, Col, ListGroup, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ContainerApp from '../components/ContainerApp';
import { Flex } from '../components/Flex';
import { UsuarioContext } from '../context/usuarioContext';
import { UsuarioContextType } from '../types/types';
import { FormataData } from '../utils/Formatador';
import { ItemLista } from '../components/ItemLista';

export default function Produto() {
  const navigate = useNavigate();
  const { usuario } = useContext(UsuarioContext || null) as UsuarioContextType;

  return (
    <ContainerApp>
      <Row>
        <Col sm={12}>
          <h1 className="mt-3 mb-5 text-center">Produto</h1>
        </Col>
        <Col sm={12}>
          <ListGroup>
            <ItemLista label="ID:" valor={usuario.id} />
            <ItemLista label="Nome:" valor={usuario.nome} />
            <ItemLista label="E-mail:" valor={usuario.email} />
            <ItemLista label="Usuario:" valor={usuario.usuario} />
            <ItemLista label="Senha:" valor={usuario.senha} />
            <ItemLista label="CPF:" valor={usuario.cpf} />
            <ItemLista label="Telefone:" valor={usuario.telefone} />
            <ItemLista label="Rua:" valor={usuario.rua} />
            <ItemLista label="Numero:" valor={usuario.numero} />
            <ItemLista label="Complemento:" valor={usuario.complemento} />
            <ItemLista label="Bairro:" valor={usuario.bairro} />
            <ItemLista label="CEP:" valor={usuario.cep} />
            <ItemLista label="Cidade:" valor={usuario.cidade} />
            <ItemLista label="Estado:" valor={usuario.estado} />
            <ItemLista label="Cadastro em:" valor={FormataData(usuario.dataCadastro)} />
            <ItemLista label="Editado em:" valor={FormataData(usuario.dataEdicao)} />
          </ListGroup>
        </Col>
        <Col sm={12} className="pt-2">
          <Flex
            flexDirection="row"
            justifyContent="end"
          >
            <Button
              variant="primary"
              onClick={() => navigate("/perfil_edicao")}
            >Editar</Button>
          </Flex>
        </Col>
      </Row>
    </ContainerApp>
  );
}
