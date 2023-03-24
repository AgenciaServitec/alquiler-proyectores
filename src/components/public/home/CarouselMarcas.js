import React from 'react';
import styled from "styled-components";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red", mixBlendMode: "overlay",}}
            onClick={onClick}
        />
    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green",mixBlendMode: "overlay" }}
            onClick={onClick}
        />
    );
}
export const CarouselMarcas = ({marcas}) => {
        const settings = {
            dots: true,
            infinite: true,
            speed:300,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
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

            <div className="content-marcas">
            <Slider {...settings}>
                {marcas.map((marca,index)=>((

                    <div key={index} className="wrapper-marcas">

                            <img src={marca}/>

                    </div>

                )))}
            </Slider>
            </div>
        </Container>
    );
};

const Container = styled.div`
padding: 2rem 1rem;
  background: #FEFF01;
  margin:0;
    .content-marcas{
      margin:0;
   
      padding: 0.5rem;
      text-align: -webkit-center;
      .wrapper-marcas{
        width: 100%;
        height:6rem;
        display: flex !important;
        justify-content: center;
         margin:0;
        padding: 1rem;
        img{
          width: 11rem;
        }
      }
    }
    
`;
