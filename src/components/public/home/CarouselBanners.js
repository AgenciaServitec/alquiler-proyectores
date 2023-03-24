import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BannerDos, BannerTres,SectionBanner} from "../../../images";
import styled from "styled-components";
import {Banners} from "../../../data-list/banners";


const BannersCarrousel = [
    SectionBanner,
    BannerDos,
    BannerTres,
]
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red", mixBlendMode: "color"}}
            onClick={onClick}
        />
    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green",mixBlendMode: "hue" }}
            onClick={onClick}
        />
    );
}

export const CarouselBanners = ({Banners}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed:300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 11300,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Container>

            <Slider {...settings}>
                {
                    Banners.map((banner, index)=>(
                        <div className="wrapper-banners">
                            <img src={banner}/>
                        </div>
                    ))
                }
            </Slider>
        </Container>
    );
};

const Container = styled.div`
  padding: 0 ;
.wrapper-banners{
  text-align: center;
  width: auto;
  img{
    width: 97%;
    height: 90%;
  }
}
`;