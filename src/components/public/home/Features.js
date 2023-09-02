import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../public/../../../src/styles/constants/mediaQuery";

export const Features = () => {
  return (
    <Container_>
      <Feature
        title="Asesoría personalizada "
        description="En nuestra empresa, ofrecemos una asesoría personalizada para adaptarnos a las necesidades de cada cliente
antes de que contrate nuestros servicios de alquiler de equipos, lo que garantiza el mejor rendimiento posible."
      />
      <Feature
        title="Disponibilidad y Variedad de equipos "
        description="Contamos con distintos tipos de proyectores de diferentes resoluciones para eventos empresariales y sociales. Además contamos con equipos adicionales como laptop, splitter, entre otros. "
      />
      <Feature
        title="Contamos con experiencia"
        description="Contamos con un equipo altamente capacitado asistiendo empresas tanto públicas como privadas. Nuestros servicios son de confiabilidad y seguridad."
      />
    </Container_>
  );
};

const Container_ = styled.section`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;

  ${mediaQuery.minTablet} {
    justify-content: space-around;
  }
`;

const Feature = ({
  title = "Scholarship Facility",
  description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, ipsam?",
}) => (
  <Container>
    <div className="feature-card">
      <div className="content">
        <h3>{title}</h3>
        <span>{description}</span>
      </div>
    </div>
  </Container>
);

const Container = styled.article`
  margin: 1em;

  .feature-card {
    width: 300px;
    border-left: 5px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0px 10px 30px 0px rgba(115, 115, 115, 0.3);

    .content {
      padding: 1.2em 1em;

      h3 {
        font-weight: 800;
      }
    }
  }
`;
