import React from "react";
import styled from "styled-components";
import { WrapperComponent } from "../ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHeart,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { capitalize } from "lodash";
import { contactData } from "../../firebase";

export const Footer = () => {
  return (
    <Container>
      <WrapperComponent>
        <>
          <div className="footer-items">
            <div className="footer-item">
              <div className="icon-item">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="text-item">
                <span>941 801 827</span>
                <p>
                  Horarios : <br />
                  Lunes a Viernes de 10:00 am a 7:00 pm
                </p>
              </div>
            </div>
            <div className="footer-item">
              <div className="icon-item">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="text-item">
                <span>gerencia@servitec.com</span>
                <p>Soporte en Linea</p>
              </div>
            </div>
            <div className="footer-item">
              <div className="icon-item">
                <FontAwesomeIcon icon={faLocation} />
              </div>
              <div className="text-item">
                <span>Chorrillos, Perú</span>
                <p>Calle Nestor Bermúdez 113</p>
              </div>
            </div>
          </div>
          <div className="social-items">
            <ul>
              <li className="icon-item">
                <a href="#">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </li>
              <li className="icon-item">
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li className="icon-item">
                <a href="#">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
              <li className="icon-item">
                <a href="#">
                  <FontAwesomeIcon icon={faLocation} />
                </a>
              </li>
            </ul>
          </div>
          <div className="botton-footer">
            <div>
              © Copyright 2023 - {capitalize(contactData.name)} / Diseñado con
              <FontAwesomeIcon icon={faHeart} color="red" /> por
              <a href="#"> Agencia servitec </a>
            </div>
          </div>
        </>
      </WrapperComponent>
    </Container>
  );
};

const Container = styled.div`
  background: #4b4b4b;
  padding: 3em 2em;
  color: white;
  grid-auto-flow: row;

  .footer-items {
    display: flex;
    align-items: start;
    justify-content: space-around;

    .footer-item {
      display: flex;
      align-items: start;
      gap: 2em;
      width: 17em;

      .icon-item {
        font-size: 3em;
        display: flex;
        align-items: start;
      }

      .text-item {
        span {
          font-size: 1.2em;
          color: ${({ theme }) => theme.colors.font1};
        }

        p {
        }
      }
    }
  }

  .social-items {
    display: flex;
    align-items: center;
    justify-content: center;

    ul {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 2em;
      color: ${({ theme }) => theme.colors.font1};

      .icon-item {
        font-size: 1.5em;

        a {
          color: white;
        }
      }
    }
  }

  .botton-footer {
    text-align: center;
    padding: 1em auto;
    margin: 1em auto;
  }
`;
