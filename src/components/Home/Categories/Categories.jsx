import React from "react";
import { categories } from "../../../assets/data/slideData";
import Category from "./Category";
import styled from "styled-components";
import { mobile } from "../../../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: 0, flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item, index) => (
        <Category item={item} key={index} />
      ))}
    </Container>
  );
};

export default Categories;
