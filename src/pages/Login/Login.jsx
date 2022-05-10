import React, { useState } from "react";
import styled from "styled-components";
import cover from "../../assets/image/negative-space.jpg";
import { mobile } from "../../responsive";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
  ${mobile({ width: "80%" })}
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

const ItemLink = styled.div`
  margin: 10px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color: #001eff;
`;

const Button = styled.button`
  width: 35%;
  border: 3px solid #fff;
  padding: 12px 15px;
  color: #000;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 2px;
  transition: all 1.5s ease;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
  &:hover {
    border: 3px solid #fff;
    color: #ffffff;
    background-color: teal;
  }
`;
const Error = styled.span`
  color: red;
`;
// main function
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  //  data send to redux action
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { userName, password });
    // console.log(userName, password);
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="user name"
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Error>Something went wrong...</Error>}
          <ItemLink>FORGOT PASSWORD ?</ItemLink>
          <ItemLink>
            <Link
              style={{ textDecoration: "none", color: "#001eff" }}
              to="/register"
            >
              CREATED A NEW ACCOUNT
            </Link>
          </ItemLink>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
