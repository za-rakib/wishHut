import React, { useState } from "react";
import styled from "styled-components";
import cover from "../../assets/image/web_shopping.svg";
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../redux/apiCalls";
import { useEffect } from "react";
import { publicRequest } from "../../requestMethod";

// style components
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url(${cover}) no-repeat fixed center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: teal;
  ${mobile({ width: "80%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  color: #fff;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
  font-size: 16px;
  ${mobile({ fontSize: "12px" })}
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
  color: #fff;
`;

const Button = styled.button`
  width: 35%;
  border: 2px solid #fff;
  padding: 12px 15px;
  background-color: #fff;
  color: #000;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.5s ease;
  border-radius: 5px;
  &:hover {
    background-color: teal;
    color: #fff;
  }
  ${mobile({ fontSize: "14px", padding: "8px 8px" })}
`;

const ItemLink = styled.div`
  margin: 10px 0;
  font-size: 13px;
  text-decoration: underline;
  cursor: pointer;
`;

const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const [userData, setUserData] = useState([]);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    setRegisterData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  //console.log(registerData.password);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await publicRequest.get("/users/registervalid");
        // console.log("Users", res.data);
        setUserData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);

 // console.log(userData);

  const handleClick = (e) => {
    e.preventDefault();

    if (registerData.password !== registerData.confirmPassword) {
      alert("Password does not match");
    } else if (registerData.password.trim().length <= 6) {
      alert("Password must have 6 characters");
    } else if (
      userData.find((user) => user.userName === registerData.userName)
    ) {
      alert("User name already exists");
    } else if (userData.find((user) => user.email === registerData.email)) {
      alert("This Email already exists");
    } else {
      const { confirmPassword, ...rest } = registerData;
      register(dispatch, rest);
       alert("Registration Successful");
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            onChange={handleChange}
            name="fullName"
            placeholder="Full Name"
          />
          <Input
            onChange={handleChange}
            name="userName"
            placeholder="User Name"
          />
          <Input onChange={handleChange} name="email" placeholder="Email" />
          <Input
            onChange={handleChange}
            name="password"
            type='password'
            placeholder="Password"
            style={{fontSize:20, WebkitTextSecurity:'circle'}}
          />
          <Input
            onChange={handleChange}
            name="confirmPassword"
            type='password'
            placeholder="Confirm Password"
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick}>CREATE</Button>
        </Form>
        <ItemLink>
          <Link
            style={{ textDecoration: "none", color: "#2d3aa1" }}
            to="/login"
          >
            Already have an account
          </Link>
        </ItemLink>
      </Wrapper>
    </Container>
  );
};

export default Register;
