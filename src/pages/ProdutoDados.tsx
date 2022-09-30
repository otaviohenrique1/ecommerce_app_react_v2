import { useEffect, useState, useContext } from 'react';
import { Button, ButtonGroup, Col, ListGroup, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import ContainerApp from '../components/ContainerApp';
import { Flex } from '../components/Flex';
import { UsuarioContext } from '../context/usuarioContext';
import { UsuarioContextType } from '../types/types';
import { ItemLista } from '../components/ItemLista';
import { Produto } from '../types/types';
import { FormatadorMoeda } from '../utils/Formatador';
import { listaProdutos } from '../utils/listas';

const initialValues = {
  codigo: '',
  nome: '',
  preco: 0,
  // quantidade: 0,
  tipo: '',
  marca: ''
};

export default function ProdutoDados() {
  const navigate = useNavigate();
  const { adicionarCarrinho } = useContext(UsuarioContext || null) as UsuarioContextType;

  const { codigo } = useParams();

  const [data, setData] = useState<Produto>(initialValues);

  useEffect(() => {
    let validaCodigoUrlParam = (codigo) ? codigo : "1";
    let resultado = listaProdutos.find((itemBusca) => {
      return itemBusca.codigo === validaCodigoUrlParam;
    });
    setData(resultado || initialValues);
  }, [codigo]);

  return (
    <ContainerApp>
      <Row>
        <Col sm={12}>
          <h1 className="mt-3 mb-5 text-center">Produto</h1>
        </Col>
        <Col sm={12}>
          <ListGroup>
            <ItemLista label="Código:" valor={String(data.codigo)} />
            <ItemLista label="Nome:" valor={data.nome} />
            <ItemLista label="Preço:" valor={FormatadorMoeda(data.preco)} />
            <ItemLista label="Tipo:" valor={data.tipo} />
            <ItemLista label="Marca:" valor={data.marca} />
          </ListGroup>
        </Col>
        <Col sm={12} className="pt-2">
          <Flex flexDirection="row" justifyContent="end">
            <ButtonGroup>
              <Button
                variant="success"
                size="sm"
                onClick={() => {}}
              >Adicionar aos favoritos</Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  adicionarCarrinho({
                    codigo: data.codigo,
                    nome: data.nome,
                    preco: data.preco,
                  });
                  navigate("/carrinho");
                }}
              >Adicionar ao carrinho</Button>
            </ButtonGroup>
          </Flex>
        </Col>
      </Row>
    </ContainerApp>
  );
}
