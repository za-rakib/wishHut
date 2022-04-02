import React from "react";
import styled from "styled-components";
import { popularProducts } from "../../assets/data/slideData";
import { Product } from "./Product";

// styled components
const Container = styled.div`
padding: 2rem;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item, index) => (
        <Product item={item} key={index} />
      ))}
    </Container>
  );
};

export default Products;
