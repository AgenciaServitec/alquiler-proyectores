import React from "react";
import styled from "styled-components";
import { EllipseImg, ProjectorPredesign } from "../../images";
import { Button } from "../../components";
import { mediaQuery } from "../../styles/constants/mediaQuery";

export const PresentationSection = () => {
  return (
    <Container>
      <div className="wrapper-contents">
        <div className="left-content">
          <div className="items">
            <div className="item-title">
              <img
                src={EllipseImg}
                className="circle-item"
                alt="title circle"
              />
              <h1>Alquiler de proyectores</h1>
            </div>
            <div className="sub-title">
              <div>
                Te brindamos el mejor servicio de alquiler para tus eventos
              </div>
            </div>
            <div className="btn-item">
              <Button margin="0" width="73%">
                CONTACTAR
              </Button>
            </div>
          </div>
        </div>
        <div className="right-content">
          <img src={ProjectorPredesign} alt="Alquiler proyectores - Servitec" />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.dark};
  ${mediaQuery.minDesktop} {
    height: 41rem;
  }

  .wrapper-contents {
    width: 100%;
    height: 100%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;

    ${mediaQuery.minDesktop} {
      grid-template-rows: auto;
      grid-template-columns: 1fr 1fr;
    }

    ${mediaQuery.minHighResolution} {
      width: 60%;
    }

    .left-content {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2em 1.5em;
      ${mediaQuery.minDesktop} {
        padding: 0;
      }
      ${mediaQuery.minDesktop} {
        padding: 0;
        justify-content: end;
      }
      .items {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1em;
        ${mediaQuery.minDesktop} {
          align-items: start;
        }
        .item-title {
          position: relative;
          .circle-item {
            position: absolute;
            width: 3.5em;
            object-fit: contain;
            top: -0.4em;
            right: 6em;
            z-index: 100;

            ${mediaQuery.minDesktop} {
              top: -0.4em;
              right: 9em;
            }
          }
          h1 {
            width: 100%;
            color: ${({ theme }) => theme.colors.font1};
            font-size: 3.5em;
            line-height: 0.9em;
            position: relative;
            z-index: 200;
            text-align: center;
            ${mediaQuery.minDesktop} {
              width: 7em;
              text-align: left;
              font-size: 4.3em;
            }
          }
        }
        .sub-title {
          div {
            width: 17em;
            font-size: 1.1em;
            line-height: 1em;
            color: ${({ theme }) => theme.colors.font2};
            text-align: center;
            ${mediaQuery.minDesktop} {
              text-align: left;
            }
          }
        }
        .btn-item {
          width: 100%;
          display: flex;
          justify-content: center;
          ${mediaQuery.minDesktop} {
            justify-content: start;
          }
        }
      }
    }
    .right-content {
      display: flex;
      align-items: center;
      justify-content: start;
      padding: 1em 0;
      ${mediaQuery.minTablet} {
        padding: 0;
      }
      img {
        width: 90%;
        object-fit: contain;
        margin: auto;
        ${mediaQuery.minMobile} {
          width: 60%;
        }
        ${mediaQuery.minTablet} {
          width: 50%;
        }
        ${mediaQuery.minDesktop} {
          width: 37em;
          margin: 0;
        }
      }
    }
  }
`;
