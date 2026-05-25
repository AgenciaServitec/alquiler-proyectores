import React from "react";
import styled from "styled-components";
import { ImageAbout } from "../../images";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import { useDevice } from "../../hooks";

export const AboutUs = () => {
  const { isMobile } = useDevice();
  return (
    <Container id="about-us">
      {/*<div className="wrapper-logos-mobile">
        <AntCarousel
          autoplay
          autoplaySpeed={3 * 1000}
          arrows={!isMobile}
          prevArrow={<FontAwesomeIcon icon={faChevronLeft} />}
          nextArrow={<FontAwesomeIcon icon={faChevronRight} />}
        >
          {logoLists.map((logoList, index) => (
            <div className="wrapper-logo-mobile" key={index}>
              <img src={logoList.image} alt={logoList.name} />
            </div>
          ))}
        </AntCarousel>
      </div>*/}
      <div className="wrapper-text">
        <div className="content-text">
          <div className="content-about">
            <div>
              <h2 className="title">¿QUE ES UN SENSOR BIOMETRICO DACTILAR?</h2>
              <p className="content">
                Un sensor biométrico suele ser un dispositivo semiconductor que
                se puede combinar con un pequeño microprocesador o
                micro-controlador de forma que el conjunto tiene la capacidad de
                tratar datos de las características físicas que posee un
                individuo.
              </p>
            </div>
            <div className="content-image">
              <div className="content-styles-margin">
                <div className="wrapper-image">
                  <img src={ImageAbout} />
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>

        {/* <div style={{ paddingBottom: "3rem" }}>
          <VideoBg autoPlay loop muted src={videoAllinOne} type="Video/mp4" />
        </div>*/}
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  .wrapper-logos-mobile {
    padding: 1.5rem 2rem;
    .wrapper-logo-mobile {
      max-width: 13em;
      width: 100%;
      padding: 2em 0 3.5em 0;

      img {
        width: 100%;
      }
    }
  }
  .wrapper-text {
    background: none repeat scroll 0 0 #1a1a1a;
    .content-text {
      text-align: center;
      width: 100%;
      padding: 4em 2em 0 2em;
      ${mediaQuery.minTablet} {
        padding: 5rem 5rem 2rem 5rem;
      }
      .content-about {
        .title {
          letter-spacing: 0.3px;
          font-family: "Intro Demo", sans-serif;
          font-size: 2.5rem;
          width: 100%;
        }
        display: grid;
        grid-template-columns: 60% 40%;
        .content {
          line-height: 1.3em;
          margin-bottom: 2em;
          margin-top: 1em;
          font-size: 1.5rem;
        }
        .content-image {
          overflow: hidden;
          display: flex;
          justify-content: center;
          .content-styles-margin {
            /* max-width: 63%;
            padding: 33px;
            background: linear-gradient(black, black) top left no-repeat, linear-gradient(black, black) top left no-repeat, linear-gradient(#f0f8ff00, #f0f8ff00) top right no-repeat, linear-gradient(#f0f8ff00, #f0f8ff00) top right no-repeat, linear-gradient(#f0f8ff00, #f0f8ff00) bottom left no-repeat, linear-gradient(#f0f8ff00, #f0f8ff00) bottom left no-repeat, linear-gradient(black, black) bottom right no-repeat, linear-gradient(black, black) bottom right no-repeat, rgba(255, 255, 255, 0.15);
            background-clip: border-box, border-box, border-box, border-box, border-box, border-box, border-box, border-box, content-box;
            background-size: 10px 60px, 80px 10px;*/
            .wrapper-image {
              transition: all 1.8s;
              :hover {
                -webkit-transform: scale(1.1);
                transform: scale(1.1);
                -webkit-transition: all 10.8s;
                transition: all 1.8s;
                opacity: 1;
                background: radial-gradient(rgb(92 92 92), rgb(96 96 96 / 80%)),
                  url(https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif);
              }
              img {
                width: 21rem;
                opacity: 0.66;
              }
            }
          }
        }
      }
    }
  }
`;

const VideoBg = styled.video`
  width: 60%;
  height: 60%;
  background: #232a34;
`;
