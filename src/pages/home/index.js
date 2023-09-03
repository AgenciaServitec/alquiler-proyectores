import React from "react";
import styled from "styled-components";
import {InitialComponent,} from "../../components/public";

export const Home = () => {
  return (
    <>
      <Container>
        <InitialComponent />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
`;
