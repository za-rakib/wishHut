import React from "react";
import styled from "styled-components";
import cover from "../../assets/negative-space.jpg";
// style components
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url(${cover});
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: teal;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  color: #fff;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
  font-size: 16px;
`;

const Link = styled.a`
  margin: 10px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Button = styled.button`
  width: 35%;
  border: none;
  padding: 15px 20px;
  background-color: #fff;
  color: #000;
  margin-top: 20px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.5s ease;
  border-radius: 5px;
  &:hover {
    background-color: #535267;
    color: #fff;
  }
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="user name" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>FORGOT PASSWORD</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
