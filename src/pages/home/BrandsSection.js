import React from "react";
import { brands } from "../../data-list/marcas";
import styled from "styled-components";
import { motion } from "framer-motion";

export const BrandsSection = () => {
  return (
    <Container>
      <motion.ul
        className="brands-list"
        initial={{ y: "7rem", opacity: "0" }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, type: "spring" }}
      >
        {brands.map((brand, index) => (
          <li key={index}>
            <div className="item-img">
              <img src={brand} alt="marca servitec" />
            </div>
          </li>
        ))}
      </motion.ul>
    </Container>
  );
};

const Container = styled.div`
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
