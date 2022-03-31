import { Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

// styled components
const Container = styled.div`
  height: 60px;
  background-color: #f5f5f5;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.div`
  font-size: 12px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
border: 1px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`
const Input = styled.input`
border: none;`
const Center = styled.div`
  flex: 1;
  justify-content: center;
  text-align: center;
`;
const Logo= styled.h1`
font-weight: bold;`
const Right = styled.div`
  flex: 1;
`;

// main function
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input/>
                <Search/>
            </SearchContainer>
        </Left>
        <Center><Logo>WISH HUT</Logo></Center>
        <Right>R</Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
