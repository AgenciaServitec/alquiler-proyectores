import React from "react";
import styled, { css } from "styled-components";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const buttonsType = {
  primary: {
    background: "#FFF100",
    border: "transparent",
    color: "#090B0D",
  },
  secondary: {
    background: "rgb(11,12,16)",
    border: "transparent",
    color: "#d2d2d2",
  },
  tertiary: {
    background: "#2f2c2c",
    border: "transparent",
    color: "#fff",
  },
};

export const Button = ({
  children,
  type = "primary",
  onClick,
  width = "auto",
  loading = false,
  disabled = false,
  noHover = false,
  props,
}) => {
  const btnStyle = buttonsType[type];

  return (
    <Container
      onClick={onClick}
      width={width}
      background={btnStyle.background}
      color={btnStyle.color}
      border={btnStyle.border}
      disabled={disabled}
      noHover={noHover}
      {...props}
    >
      <div className="content-button">
        {loading && (
          <FontAwesomeIcon
            icon={faSpinner}
            spin={loading}
            className="item-icon"
          />
        )}
        {children}
      </div>
    </Container>
  );
};

const Container = styled.button`
  ${({ background, color, border, width, noHover }) => css`
    width: ${width};
    padding: 0.7em 1.5em;
    border-radius: ${({ theme }) => theme.border_radius.small};
    border: ${border};
    background: ${background};
    color: ${color};
    text-transform: uppercase;
    cursor: pointer;
    font-size: 1em;
    transition: all ease-in-out 0.3s;
    transform: scale(1, 1);
    ${mediaQuery.minTablet} {
      font-size: 1.2em;
    }

    ${!noHover &&
    css`
      &:hover {
        transition: all ease-in-out 0.3s;
        transform: scale(1.05, 1.05);
      }
    `}

    ${({ disabled }) =>
      disabled &&
      css`
        &:disabled,
        &[disabled] {
          border: #999999;
          background-color: #cccccc;
          cursor: not-allowed;
          color: #666666;
        }
      `}

    .content-button {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      .item-icon {
        margin-right: 0.7em;
      }
    }
  `}
`;
