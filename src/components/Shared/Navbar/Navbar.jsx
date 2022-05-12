import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Badge from "@material-ui/core/Badge";
import { mobile } from "../../../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// styled components
const Container = styled.div`
  height: 60px;
  background-color: #f5f5f5;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "5px 0", alignItems: "center", marginTop: "5px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.p`
  font-size: 15px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  padding: 5px;
  ${mobile({ width: "50px" })}
`;
const Center = styled.div`
  flex: 1;
  justify-content: center;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  text-decoration: none;
  ${mobile({ fontSize: "18px", marginLeft: "5px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
  font-size: 15px;
  cursor: pointer;
  margin-left: 20px;

  ${mobile({ fontSize: "12px", marginLeft: "5px" })}
`;

const Profile = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: red;
`;
// main function
const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  // console.log("cart", quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              WISH HUT
            </Link>
          </Logo>
        </Center>
        <Right>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/register"
          >
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }} to="/login">
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }} to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
          <MenuItem>
            <Profile></Profile>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
