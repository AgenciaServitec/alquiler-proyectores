import React from "react";
import styled from "styled-components";
import { ImgPlan1 } from "../../images";
import { mediaQuery } from "../../styles/constants/mediaQuery";

export const AboutUsPlans = () => {
  return (
    <Container>
      <h2>Nuestros planes</h2>
      <div className="wrapper-plans">
        <div className="plan-card">
          <div className="img-item">
            <img src={ImgPlan1} alt="plan alquiler proyector" />
          </div>
          <div className="descriptions-item">
            <div className="title">
              <h4>Alquiler por Horas</h4>
              <h3>1 hora por S/ 45</h3>
            </div>
            <div className="list">
              <ul>
                <li>
                  Pago Aparte S/.150 por garantía del producto entregados.
                </li>
                <li>
                  Se hace entrega del producto en nuestro mismo local, si desea
                  la entrega en su domicilio se paga aparte un concepto de
                  traslado.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="plan-card">
          <div className="img-item">
            <img src={ImgPlan1} alt="plan alquiler proyector" />
          </div>
          <div className="descriptions-item">
            <div className="title">
              <h4>Alquiler por Horas</h4>
              <h3>1 hora por S/ 45</h3>
            </div>
            <div className="list">
              <ul>
                <li>
                  Pago Aparte S/.150 por garantía del producto entregados.
                </li>
                <li>
                  Se hace entrega del producto en nuestro mismo local, si desea
                  la entrega en su domicilio se paga aparte un concepto de
                  traslado.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="plan-card">
          <div className="img-item">
            <img src={ImgPlan1} alt="plan alquiler proyector" />
          </div>
          <div className="descriptions-item">
            <div className="title">
              <h4>Alquiler por Horas</h4>
              <h3>1 hora por S/ 45</h3>
            </div>
            <div className="list">
              <ul>
                <li>
                  Pago Aparte S/.150 por garantía del producto entregados.
                </li>
                <li>
                  Se hace entrega del producto en nuestro mismo local, si desea
                  la entrega en su domicilio se paga aparte un concepto de
                  traslado.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  padding: 4em 0;
  background-color: ${({ theme }) => theme.colors.secondary};

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 3em;
    text-transform: uppercase;
  }

  .wrapper-plans {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(22em, 1fr));
    color: ${({ theme }) => theme.colors.font2};
    padding: 1em;
    justify-content: center;
    gap: 1.5em;
    margin: auto;
    ${mediaQuery.minDesktop} {
      width: 71em;
    }
    .plan-card {
      display: grid;
      grid-template-rows: 15em 1fr;
      gap: 1em;
      width: 100%;
      max-width: 22em;
      height: auto;
      border: 1px solid #aeaeae;
      border-radius: 1em;
      overflow: hidden;
      margin: auto;

      .img-item {
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .descriptions-item {
        display: flex;
        flex-direction: column;
        justify-content: start;
        gap: 1em;
        padding: 1em;

        .title {
          text-align: center;
          line-height: 1.2em;

          h4 {
            color: inherit;
            font-size: 1.2em;
          }

          h3 {
            color: ${({ theme }) => theme.colors.primary};
            font-size: 1.7em;
          }
        }

        .list {
          padding: 1.5em;
          ul {
            text-align: left;
            display: grid;
            gap: 0.7em;
          }
        }
      }
    }
  }
`;
