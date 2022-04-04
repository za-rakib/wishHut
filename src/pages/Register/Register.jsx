import React from "react";
import styled from "styled-components";
import cover from "../../assets/web_shopping.svg";
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
padding:20px;
width:40%;
background-color:#8f88f1;
`;

const Title = styled.h1`
font-size:24px;
font-weight:300;
color:#fff;
text-align:center;
`;

const Form = styled.form`
display:flex;
flex-wrap:wrap;
`;

const Input = styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0 0;
padding:10px;
font-size:16px;
`;

const Agreement = styled.span`
font-size:12px;
margin:20px 0;
color:#fff;
`;

const Button = styled.button`
width:35%;
border: none;
padding:15px 20px;
background-color:#fff;
color:#000;
font-size:16px;
cursor:pointer;
transition:all 0.5s ease;
border-radius:5px;
&:hover{
    background-color:#535267;
    color:#fff;
}
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="User Name" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
