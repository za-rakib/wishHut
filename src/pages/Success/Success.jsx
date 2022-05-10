import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  padding: 20px;
  background-color: #f3ffff;
`;
const Button = styled.button`
  width: 100%;
  background-color: #008080;
  padding: 10px;
  border: 2px solid #fff;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
`;
const Text = styled.h4`
  color: #3a3a3a;
  margin-top: 10px;
`;

const Success = () => {
  const location = useLocation();
  console.log(location);

  return (
    <Container>
      <Wrapper>
        <Link to='/'>
          <Button>Successful</Button>
        </Link>
        <Text>
          Your order is being prepared. <br />
          Thanks for choosing Wish Hut !!
        </Text>
      </Wrapper>
    </Container>
  );
};

export default Success;
