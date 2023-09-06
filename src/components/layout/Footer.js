import React from "react";
import styled from "styled-components";
import { WrapperComponent } from "../ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHeart,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { capitalize } from "lodash";
import { contactData } from "../../firebase";
import { lighten } from "polished";
import { mediaQuery } from "../../styles/constants/mediaQuery";

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
                <FontAwesomeIcon icon={faLocationDot} />
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
                <a
                  href="https://servitec.site"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </li>
              <li className="icon-item">
                <a
                  href="https://servitec.site"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li className="icon-item">
                <a
                  href="https://servitec.site"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
              <li className="icon-item">
                <a
                  href="https://servitec.site"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLocationDot} />
                </a>
              </li>
            </ul>
          </div>
        </>
      </WrapperComponent>
      <div className="footer-bottom">
        © Copyright 2023 - {capitalize(contactData.name)} / Desarrollado con
        <FontAwesomeIcon icon={faHeart} color="red" /> por
        <a href={contactData.poweredBy.webUrl} target="_blank" rel="noreferrer">
          {contactData.poweredBy.name}
        </a>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => lighten(0.01, theme.colors.black)};
  .footer-items {
    padding: 3em 1em 1em 1em;
    align-items: start;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
    gap: 1em;
    .footer-item {
      display: flex;
      align-items: start;
      gap: 2em;
      width: 17em;
      margin: 0;
      padding: 0 1em;
      ${mediaQuery.minMobile} {
        margin: 0 auto;
      }

      .icon-item {
        font-size: 3em;
        display: flex;
        align-items: start;
        svg {
          color: ${({ theme }) => theme.colors.font1};
        }
      }

      .text-item {
        span {
          font-size: 1.2em;
          color: ${({ theme }) => theme.colors.font1};
        }

        p {
          color: ${({ theme }) => theme.colors.font3};
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
        font-size: 2.1em;

        a {
          color: ${({ theme }) => theme.colors.font2};
        }
      }
    }
  }

  .footer-bottom {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.font2};
    text-align: center;
    padding: 1em 0;
    margin: 1em auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    flex-wrap: wrap;
    a {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
