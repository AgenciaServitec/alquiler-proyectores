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
                min: 1024,
              },
              items: 4,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 564,
              },
              items: 4,
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
          {servicesImages.map((serviceImage, index) => (
            <img src={serviceImage.img} alt="alquiler proyectores" />
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
    overflow: hidden;
    img {
      border-radius: 1em;
      width: 37em;
      height: auto;
      object-fit: contain;
    }
  }

  .container-services-carousel {
    overflow: visible;
  }
`;
