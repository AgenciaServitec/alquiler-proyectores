import React, { useState } from "react";
import styled from "styled-components";
import { BrandsSection } from "./BrandsSection";
import { PresentationSection } from "./PresentationSection";
import { ServicesSection } from "./ServicesSection";
import { AboutUsPlans } from "./AboutUsPlans";
import { ContactModal } from "../../components";

export const Home = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const onSetIsVisibleModal = () => setIsVisibleModal(!isVisibleModal);

  return (
    <>
      <Container>
        <PresentationSection onSetIsVisibleModal={onSetIsVisibleModal} />
        <BrandsSection />
        <ServicesSection />
        <AboutUsPlans onSetIsVisibleModal={onSetIsVisibleModal} />
        <ContactModal
          isVisibleModal={isVisibleModal}
          onSetIsVisibleModal={onSetIsVisibleModal}
        />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
`;
