import React from "react";
import styled from "styled-components";

// styled components
const Container = styled.div`
  flex: 1;
  margin: 0.5rem;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 1rem;
`;
const Button = styled.button`
  border: none;
  padding: 0.8rem;
  color: gray;
  background-color: white;
  border-radius: 0.4rem;
  cursor: pointer;
  font-weight: 600;
`;

function Category({ item }) {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
}

export default Category;