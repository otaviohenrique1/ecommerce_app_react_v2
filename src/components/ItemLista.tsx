import { ListGroupItem } from 'react-bootstrap';
import { Flex } from './Flex';

interface ItemListaProps {
  label: string;
  valor: string;
}

export function ItemLista(props: ItemListaProps) {
  return (
    <ListGroupItem>
      <Flex
        flexDirection="row"
        justifyContent="space-between"
      >
        <span className="fw-bold">{props.label}</span>
        <span>{props.valor}</span>
      </Flex>
    </ListGroupItem>
  );
}
