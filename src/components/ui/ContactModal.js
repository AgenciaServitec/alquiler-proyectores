import React from "react";
import Modal from "antd/lib/modal";
import { FormContact } from "./FormContact";
import styled from "styled-components";

export const ContactModal = ({ isVisibleModal, onSetIsVisibleModal }) => {
  return (
    <ModalContainer
      open={isVisibleModal}
      onCancel={() => onSetIsVisibleModal()}
      closable={isVisibleModal}
      footer={false}
    >
      <h2 className="title-item">Enviarme cotización</h2>
      <FormContact />
    </ModalContainer>
  );
};

const ModalContainer = styled(Modal)`
  border-radius: 1em;
  .title-item {
    color: ${({ theme }) => theme.colors.dark};
    text-align: center;
  }
`;
