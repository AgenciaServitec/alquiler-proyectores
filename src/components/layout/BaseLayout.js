import React, { useState } from "react";
import styled from "styled-components";
import { useDevice } from "../../hooks";
import { Drawer } from "./Drawer";
import { useNavigate } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ButtonsFloating, ContactModal } from "../ui";

export const BaseLayout = ({ children }) => {
  const { isMobile } = useDevice();
  const navigate = useNavigate();

  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [visibleDrawer, setVisibleDrawer] = useState(false);

  const onSetIsVisibleModal = () => setIsVisibleModal(!isVisibleModal);

  return (
    <Container>
      <Drawer
        visibleDrawer={visibleDrawer}
        onSetVisibleDrawer={setVisibleDrawer}
      />
      <Header
        isMobile={isMobile}
        onSetVisibleDrawer={setVisibleDrawer}
        onNavigate={navigate}
        onSetIsVisibleModal={onSetIsVisibleModal}
      />
      <main className="body">{children}</main>
      <Footer />
      <ButtonsFloating />
      <ContactModal
        isVisibleModal={isVisibleModal}
        onSetIsVisibleModal={onSetIsVisibleModal}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  position: relative;
`;
