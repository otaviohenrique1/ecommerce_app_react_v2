import { ListGroupItem } from "react-bootstrap";
import { Flex } from "./Flex";

export function ItemListaVazio() {
  return (
    <ListGroupItem>
      <Flex alignContent="center" justifyContent="center">
        <h2>Lista vazia</h2>
      </Flex>
    </ListGroupItem>
  );
}