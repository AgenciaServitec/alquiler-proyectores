import React from "react";
import styled from "styled-components";
import { ServicesCarousel } from "./ServicesCarousel";

export const ServicesSection = () => {
  return (
    <Container>
      <ServicesCarousel />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 2em 0;
  padding: 3em;
  overflow: hidden;

  .container-services-carousel {
    overflow: visible;
  }
`;
