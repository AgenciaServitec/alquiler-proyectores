import React from 'react';
import styled from "styled-components";
import {ImgSection} from "../../../images";
export const ImgSectionComponent = () => {
    return (
        <Container>
            <img src={ImgSection}/>
        </Container>
    );
};
const Container = styled.div`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.secondary};
  text-align: center;
img{
  width: 100%;
  height: 60rem;
}
`;