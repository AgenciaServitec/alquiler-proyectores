import React from "react";
import styled from "styled-components";
import {
  DiamontImg,
  EllipseImg,
  EllipseToAnimated2,
  ProjectorPredesign,
} from "../../images";
import { Button } from "../../components";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import { motion } from "framer-motion";

export const PresentationSection = ({ onSetIsVisibleModal }) => {
  return (
    <Container>
      <div className="wrapper-contents" id="home-section">
        <div className="left-content">
          <motion.div
            className="items"
            initial={{ x: "-7rem", opacity: "0" }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, type: "spring" }}
          >
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
              <Button
                margin="0"
                width="73%"
                onClick={() => onSetIsVisibleModal()}
              >
                CONTACTAR
              </Button>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="right-content"
          initial={{ x: "7rem", opacity: "0" }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, type: "spring" }}
        >
          <div className="wrapper-animated">
            <motion.img
              src={EllipseToAnimated2}
              alt="alquiler proyectores"
              className="img-ellipse-animated"
              animate={{
                scale: 1.05,
                rotate: 360,
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />
            <motion.img
              src={DiamontImg}
              alt="alquiler proyectores"
              className="img-diamond-animated"
              animate={{
                scale: 1.05,
                rotate: -360,
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />
            <motion.img
              src={DiamontImg}
              alt="alquiler proyectores"
              className="img-diamond-animated-2"
              animate={{
                scale: 1.05,
                rotate: 360,
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />
            <motion.img
              src={DiamontImg}
              alt="alquiler proyectores"
              className="img-diamond-animated-3"
              animate={{
                scale: 1.05,
                rotate: 360,
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />
          </div>
          <img src={ProjectorPredesign} alt="Alquiler proyectores - Servitec" />
        </motion.div>
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
    overflow: hidden;

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
      position: relative;
      display: flex;
      align-items: center;
      justify-content: start;
      padding: 1em 0;

      ${mediaQuery.minTablet} {
        padding: 0;
      }

      .wrapper-animated {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 20px;
        margin: auto;
        display: flex;
        align-items: start;
        justify-content: center;
        ${mediaQuery.minDesktop} {
          justify-content: start;
        }
        img {
          position: absolute;
          margin-top: 2em;
        }
        .img-diamond-animated {
          position: absolute;
          width: 3em;
          top: 5em;
          right: 0;
          ${mediaQuery.minTablet} {
            right: 13em;
          }
        }
        .img-diamond-animated-2 {
          position: absolute;
          width: 3em;
          left: 3em;
          ${mediaQuery.minTablet} {
            right: 17em;
          }
        }
        .img-diamond-animated-3 {
          position: absolute;
          width: 3em;
          bottom: 2em;
          right: 14em;
          ${mediaQuery.minTablet} {
            bottom: 5em;
            right: 29em;
          }
        }
      }

      img {
        position: relative;
        z-index: 200;
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
