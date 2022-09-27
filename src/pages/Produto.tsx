import { useEffect, useState/*, useContext */ } from 'react';
import { Button, Col, ListGroup, Row } from 'react-bootstrap';
import { /* useNavigate, */ useParams } from 'react-router-dom';
import ContainerApp from '../components/ContainerApp';
import { Flex } from '../components/Flex';
// import { UsuarioContext } from '../context/usuarioContext';
// import { UsuarioContextType } from '../types/types';
import { ItemLista } from '../components/ItemLista';
import { ListaProdutoTypes } from '../types/types';
import { FormatadorMoeda } from '../utils/Formatador';
import { listaProdutos } from '../utils/listas';

const initialValues: ListaProdutoTypes = {
  codigo: 0,
  nome: '',
  preco: 0,
  quantidade: 0,
  tipo: '',
  marca: ''
};

export default function Produto() {
  // const navigate = useNavigate();
  // const { usuario } = useContext(UsuarioContext || null) as UsuarioContextType;

  const { codigo } = useParams();

  const [data, setData] = useState<ListaProdutoTypes>(initialValues);

  useEffect(() => {
    let validaCodigoUrlParam = (codigo) ? Number(codigo) : 1;
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
            <ItemLista label="codigo:" valor={String(data.codigo)} />
            <ItemLista label="nome:" valor={data.nome} />
            <ItemLista label="preco:" valor={FormatadorMoeda(data.preco)} />
            <ItemLista label="quantidade:" valor={String(data.quantidade)} />
            <ItemLista label="tipo:" valor={data.tipo} />
            <ItemLista label="marca:" valor={data.marca} />
          </ListGroup>
        </Col>
        <Col sm={12} className="pt-2">
          <Flex
            flexDirection="row"
            justifyContent="end"
          >
            <Button
              variant="primary"
              // onClick={() => navigate("/perfil_edicao")}
            >Adicionar ao carrinho</Button>
          </Flex>
        </Col>
      </Row>
    </ContainerApp>
  );
}
