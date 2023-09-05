import React from "react";
import styled from "styled-components";
import { BrandsSection } from "./BrandsSection";
import { PresentationSection } from "./PresentationSection";
import { ServicesSection } from "./ServicesSection";
import { AboutUsPlans } from "./AboutUsPlans";

export const Home = () => {
  return (
    <>
      <Container>
        <PresentationSection />
        <BrandsSection />
        <ServicesSection />
        <AboutUsPlans />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
`;
