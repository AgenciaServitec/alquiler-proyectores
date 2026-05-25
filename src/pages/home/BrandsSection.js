import React from "react";
import { brands } from "../../data-list/marcas";
import styled from "styled-components";
import { motion } from "framer-motion";

export const BrandsSection = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.7,
        staggerChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Container>
      <motion.ul
        className="brands-list"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {brands.map((brand, index) => (
          <motion.li key={index} className="item" variants={item}>
            <div className="item-img">
              <img src={brand} alt="marca proyectores" />
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.primary};

  .brands-list {
    list-style: none;
    padding: 0.5em 0;
    margin: 0;
    display: flex;
    justify-content: center;
    gap: 1.5em;
    flex-wrap: wrap;

    li {
      .item-img {
        width: 10em;
        height: 5em;
        display: flex;
        justify-content: center;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }
`;
