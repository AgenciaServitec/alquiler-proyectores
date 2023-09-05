import React from "react";
import Carousel from "react-multi-carousel";
import {
  BannerCarousel1,
  BannerCarousel2,
  BannerCarousel3,
  BannerCarousel4,
  BannerCarousel5,
} from "../../images";
import styled from "styled-components";
import { mediaQuery } from "../../styles/constants/mediaQuery";

export const ServicesCarousel = ({ isMobile }) => {
  const servicesImages = [
    { id: 1, img: BannerCarousel1 },
    { id: 2, img: BannerCarousel2 },
    { id: 3, img: BannerCarousel3 },
    { id: 4, img: BannerCarousel4 },
    { id: 5, img: BannerCarousel5 },
  ];

  return (
    <Container>
      <ul className="list-cards">
        <Carousel
          infinite
          additionalTransfrom={0}
          arrows={!isMobile}
          autoPlaySpeed={3000}
          centerMode={false}
          className="container-services-carousel"
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1124,
              },
              items: 3,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1124,
                min: 664,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
            mobile: {
              breakpoint: {
                max: 664,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={2}
          swipeable
          style={{ overflow: "visible" }}
        >
          {servicesImages.map((serviceImage) => (
            <li key={serviceImage.id}>
              <div className="item-img">
                <img src={serviceImage.img} alt="alquiler proyectores" />
              </div>
            </li>
          ))}
        </Carousel>
      </ul>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 1em 0;

  .list-cards {
    list-style: none;
    padding: 0;
    width: 100%;

    li {
      display: flex;
      justify-content: center;
      padding: 1em;

      .item-img {
        border-radius: 1em;
        overflow: hidden;
        width: 100%;
        max-width: 40em;
        border: 1px solid #818181;

        img {
          width: 100%;
          height: auto;
          object-fit: contain;
        }
      }
    }
  }

  .container-services-carousel {
    overflow: visible;
  }
`;
