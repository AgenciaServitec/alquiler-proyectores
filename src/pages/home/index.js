import React from "react";
import styled from "styled-components";
import {InitialComponent, AboutUs, Cards, VideoSection, ImgSectionComponent} from "../../components/public";
import {CarouselMarcas} from "../../components/public/home/CarouselMarcas";
import {marcas} from "../../data-list/marcas";


export const Home = ({ onEventGaClickButton, onEventGaClickVideos }) => {

  return (
    <>
      <Container>
        {/*<Carousel*/}
        {/*  onClickVisibleFormContact={onClickVisibleFormContact}*/}
        {/*  onEventGaClickButton={onEventGaClickButton}*/}
        {/*/>*/}
        <InitialComponent />
        <CarouselMarcas marcas={marcas} />
          <VideoSection/>
        <Cards />
          <ImgSectionComponent/>
        {/*<WrapperComponent>*/}
        {/*  <VideoSection*/}
        {/*    onClickVisibleFormContact={onClickVisibleFormContact}*/}
        {/*    onEventGaClickButton={onEventGaClickButton}*/}
        {/*    onEventGaClickVideos={onEventGaClickVideos}*/}
        {/*  />*/}

        {/*</WrapperComponent>*/}
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
`;
