import React from "react";
import styled from "styled-components";
import { ImgPlan1, ImgPlan2, ImgPlan3 } from "../../images";
import { Button } from "../../components";
import { motion } from "framer-motion";

const features = [
  "Pago Aparte S/.150 por garantía del producto entregados.",
  "Se hace entrega del producto en nuestro mismo local, si desea la entrega en su domicilio se paga aparte un concepto de traslado.",
];

const plans = [
  {
    id: 1,
    img: ImgPlan1,
    subTitle: "Alquiler por Horas",
    title: "1 Hora S/ 45",
    features,
  },
  {
    id: 2,
    img: ImgPlan2,
    subTitle: "Promociones por Horas",
    title: "3 Horas S/ 65",
    features,
  },
  {
    id: 3,
    img: ImgPlan3,
    subTitle: "Alquiler por Días",
    title: "1 Día S/ 180",
    features,
  },
];

export const AboutUsPlans = ({ onSetIsVisibleModal }) => {
  return (
    <Container id="plans-section">
      <h2>Nuestros planes</h2>
      <div className="wrapper-plans">
        {plans.map((plan) => (
          <motion.div
            key={plan.id}
            className="plan-card"
            initial={{ y: "-7rem", opacity: "0" }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, type: "spring" }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="img-item">
              <img src={plan.img} alt="alquiler proyector por horas" />
            </div>
            <div className="descriptions-item">
              <div className="title">
                <h4>{plan.subTitle}</h4>
                <h3>{plan.title}</h3>
              </div>
              <div className="list">
                <ul>
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="wrapper-contact-button">
        <Button width="20em" onClick={() => onSetIsVisibleModal()}>
          Contactar
        </Button>
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
    width: 100%;
    max-width: 71em;

    .plan-card {
      display: grid;
      grid-template-rows: 15em 1fr;
      gap: 1em;
      width: 100%;
      max-width: 22em;
      height: auto;
      background: #343434;
      border: 1px solid #aeaeae;
      border-radius: 1em;
      overflow: hidden;
      margin: auto;

      &:nth-child(2) {
        background: #1e1e1e;
        border: 1px solid ${({ theme }) => theme.colors.white};
      }

      &:nth-child(3) {
        background: #0e0e0e;
        border: 1px solid ${({ theme }) => theme.colors.primary};
      }

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
          line-height: 1.3em;

          h4 {
            color: inherit;
            font-size: 1.2em;
          }

          h3 {
            color: ${({ theme }) => theme.colors.primary};
            font-size: 1.7em;
            font-weight: 700;
          }
        }

        .list {
          padding: 1em 1.5em;

          ul {
            text-align: left;
            display: grid;
            gap: 0.7em;
          }
        }
      }
    }
  }

  .wrapper-contact-button {
    display: flex;
    justify-content: center;
    padding-top: 2em;
  }
`;
