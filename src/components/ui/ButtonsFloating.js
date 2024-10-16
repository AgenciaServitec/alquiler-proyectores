import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import styled, { css } from "styled-components";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import {common} from "../../firebase";

export const ButtonsFloating = () => (
  <Container>
    <a
      href={`https://api.whatsapp.com/send?phone=941801827`}
      target="_blank"
      rel="noreferrer"
    >
      <WrapperButton bg="#5cc753">
        <div className="item-text">
          <div>Whatsapp</div>
          <div>{common?.contactData?.numbers?.phone?.[0]}</div>
        </div>
        <div className="item-icon">
          <FontAwesomeIcon icon={faWhatsapp} className="icon" />
        </div>
      </WrapperButton>
    </a>
  </Container>
);

const Container = styled.div`
  position: fixed;
  left: 0;
  bottom: 0.8%;
  z-index: 998;
`;

const WrapperButton = styled.div`
  ${({ bg }) => css`
    background: ${bg};
    padding: 0.2rem 0.3rem;
    border: none;
    margin-bottom: 0.7rem;
    height: auto;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 7rem;
    border-bottom-right-radius: 7rem;
    ${mediaQuery.minTablet} {
      padding: 0.3rem 0.6rem;
    }
    .item-icon {
      margin-left: 0.5rem;
      padding: 0.3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        color: ${({ theme }) => theme.colors.font1};
        font-size: 1.8rem;
        ${mediaQuery.minTablet} {
          font-size: 2rem;
        }
      }
    }
    .item-text {
      font-size: 0.8rem;
      color: ${({ theme }) => theme.colors.font1};
      div {
        line-height: 1.3rem;
      }
      div:last-child {
        font-size: 1.2rem;
      }

      ${mediaQuery.minTablet} {
        font-size: 0.9rem;
        div {
          line-height: 1.4rem;
        }
        div:last-child {
          font-size: 1.3rem;
        }
      }
    }
  `}
`;
