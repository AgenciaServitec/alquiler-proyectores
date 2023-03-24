import React from "react";
import styled from "styled-components";
import {
  AlquilerProyector, AlquilerProyector1, AlquilerProyector2,
} from "../../../images";
import { mediaQuery } from "../../../styles/constants/mediaQuery";
import { Button } from "../ui";
import { ItemServices } from "./ItemServices";

export const Cards = () => {
  return (
    <Container id="ofertas-de-pago">
      <div className="content-items">
        <div className="heading">
          <h2 className="title">+ Planes de Alquiler</h2>
          <h5 className="subtitle">NUESTROS SERVICIOS</h5>
        </div>
        <div className="content-img">
          <ItemServices
            img={AlquilerProyector}
            precio="1h x $/.45"
            title="Alquiler X Horas"
            contents={["✱ Pago Aparte $/.100 por garantia del producto entregados.","✱ Se hace entrega del producto en nuestro mismo local si desea la entrega en su domicilio se paga aparte un concepto de traslado."]}
          />
          <ItemServices
            img={AlquilerProyector1}
            precio="3h x $/.120"
            title="Promociones X Horas"
            contents={["✱ Pago Aparte $/.100 por garantia del producto entregados.","✱ Se hace entrega del producto en nuestro mismo local si desea la entrega en su domicilio se paga aparte un concepto de traslado."]}
          />
          <ItemServices
              img={AlquilerProyector2}
              precio="1d x $/.250"
              title="Alquiler X Dias"
              contents={["✱ Pago Aparte $/.100 por garantia del producto entregados.","✱ Se hace entrega del producto en nuestro mismo local si desea la entrega en su domicilio se paga aparte un concepto de traslado."]}
          />
        </div>
        <div className="button">
          <a href="#inicio">
            <Button
              text="¡Empezar Ahora!"
              type="primary"
              // onClick={() => {
              //   onEventGaClickButton(
              //     "click-boton-empezar-ahora",
              //     "Click boton empezar ahora"
              //   );
              // }}
            />
          </a>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.tertiary};
  padding: 1rem;
  ${mediaQuery.minTablet} {
    padding: 1rem 5rem;
  }
  z-index: 9;

  .content-items {
    padding: 1em 0;
    ${mediaQuery.minTablet} {
      padding: 1em 0;
    }
    .heading {
      margin-bottom: 60px;
   
      position: relative;
      text-align: center;
      width: 100%;
      .title {
        left: 0;
        text-align: center;
        width: 100%;
        font-size: 3.5rem;
        margin-bottom: 0rem;
      }
      .subtitle {
        font-family: "Intro Demo", sans-serif;
        font-size: 26px;
        letter-spacing: 0.3px;
        text-align: center;
        width: 100%;
      }
    }
    .content-img {
      display: flex;
      justify-content: space-evenly;
      gap: 2rem;
      flex-wrap: wrap;
    }
    .button {
      padding-top: 1.4rem;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;
