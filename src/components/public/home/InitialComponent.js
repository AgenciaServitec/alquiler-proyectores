import React from "react";
import styled from "styled-components";
import { UniverseBackground } from "../../../images";
import { mediaQuery } from "../../../styles/constants/mediaQuery";
import { FormContact } from "../ui";

export const InitialComponent = () => {
  return (
    <Container id="inicio" bgImage={UniverseBackground}>
      <div className="content-items">
        <div className="content">
          <div className="heading">
            <h2 className="description">ALQUILER DE PROYECTORES DE ALTA DEFINICIÓN</h2>
            {/*<h3>MANTENIMIENTO Y REPARACIÓN</h3>*/}
            {/*<h3>¡Tenemos lo que necesita!</h3>*/}
          </div>
        </div>
        <div className="content-img">
          <div className="wrapper-form">
            <FormContact />
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: auto;
  background: url(${({ bgImage }) => bgImage}) no-repeat scroll 0 0 / 100% 100%
    rgba(0, 0, 0, 0);
  background-position: center center;
  background-size: cover;

  ${mediaQuery.minTablet} {
    padding: 3rem 0;
  }

  .content-items {
    display: grid;
    grid-template-columns: 1fr;
    padding: 1rem;

    ${mediaQuery.minTablet} {
      grid-template-columns: 60% 40%;
      padding: 2rem 3rem 3rem 3rem;
    }

    .content {
      align-self: center;
      padding-left: 0;
      ${mediaQuery.minTablet} {
        grid-template-columns: 1fr 30rem;
        padding-bottom: 23rem;
      }

      .heading {
        .title {
          color: ${({ theme }) => theme.colors.font1};
          font-weight: 800;
          font-family: "Intro Demo", sans-serif;
          font-size: 1.2rem;
          padding-top: 1.2rem;
          ${mediaQuery.minTablet} {
            grid-template-columns: 1fr 30rem;
            padding-bottom: 1.2rem;
          }
        }

        .description {
          //max-width: 40rem;
          font-weight: 500;
          font-size: 2.5rem;
          font-family: "Intro Demo", sans-serif;
          line-height: 4rem;
          ${mediaQuery.minTablet} {
            font-size: 3.5rem;
          }
        }
        h3 {
          font-size: 1.5em;
          color: ${({ theme }) => theme.colors.primary};
          ${mediaQuery.minTablet} {
            font-size: 1.7em;
          }
        }
      }

      .list-about {
        margin: 1rem 1.5rem;

        ul {
          li {
            width: auto;
            background: transparent;
            color: ${({ theme }) => theme.colors.font3};
            list-style: none;
            margin-bottom: 0.5rem;

            svg {
              margin-right: 0.7rem;
            }
          }
        }
      }
    }
    .content-img {
      margin-top: 1rem;
      text-align: center;
      justify-self: center;
      margin-right: 6rem ;
      width: 20rem;
      ${mediaQuery.minTablet} {
        width: auto;
      }
      .wrapper-form {
        width: 100%;
        max-width: 30em;
        background: ${({ theme }) => theme.colors.secondary};
        border-radius: 10px;
        padding: 1.5rem 2rem;
        color: ${({ theme }) => theme.colors.dark};
      }
    }
  }
`;
