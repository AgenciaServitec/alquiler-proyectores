import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../../styles/constants/mediaQuery";

import { CarouselBanners } from "./CarouselBanners";
import { Banners } from "../../../data-list/banners";

export const VideoSection = () => (
  <Container id="nosotros">
    <div className="content-video">
      <CarouselBanners Banners={Banners} />
    </div>
    {/*  <div className="wrapper-iframe">
          <iframe title = "map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d581.475771441591!2d-77.02018627162576!3d-12.16925089704749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b7788f5f5189%3A0x70a366f7a0e80cd0!2sServitec!5e0!3m2!1ses-419!2spe!4v1679587731417!5m2!1ses-419!2spe"
                  allowFullScreen="" loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"/>
      </div>*/}
  </Container>
);

const Container = styled.div`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  .content-video{
    ${mediaQuery.minTablet} {
      width: 100%;
      height: auto;
      padding: 1rem;
    }
  }
  .wrapper-iframe{
    padding-top: 3rem;
    height: auto;
    iframe{
      width: 100%;
      height: 450px;
      @media(max-width: 480px){
        width: auto;
        height: 20rem;
        display: flex;
      }

    }
    @media(max-width: 480px){
      width: 3rem;
      height: 19rem;
    }
  }
  }
`;
