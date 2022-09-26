import React, { ReactNode } from 'react';
import { Container } from 'react-bootstrap';
import Appbar from './Appbar';

interface ContainerAppProps {
  children: ReactNode;
}

export default function ContainerApp(props: ContainerAppProps) {
  return (
    <>
      <Appbar />
      <Container className="py-4">
        {props.children}
      </Container>
    </>
  );
}
