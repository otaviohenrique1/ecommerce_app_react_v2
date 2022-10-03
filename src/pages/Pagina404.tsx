import { Container } from "react-bootstrap";
import { Flex } from "../components/Flex";

export function Pagina404() {
  return (
    <Container className="py-4" /* fluid */>
      <Flex
        className="mt-5"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <h1 className="fw-bold">Erro 404</h1>
        <h2 className="fw-light">Pagina não encontrada</h2>
      </Flex>
    </Container>
  );
}