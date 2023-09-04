import React from "react";
import styled from "styled-components";
import { BrandsSection } from "./BrandsSection";
import { PresentationSection } from "./PresentationSection";

export const Home = () => {
  return (
    <>
      <Container>
        <PresentationSection />
        <BrandsSection />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
`;
