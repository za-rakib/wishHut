import {
  AccountCircleOutlined,
  Search,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Badge from "@material-ui/core/Badge";
import { mobile } from "../../../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from '@material-ui/core/Divider';
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";

// styled components
const Container = styled.div`
  height: 80px;
  background-color: #f5f5f5;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 5px 20px;
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
const MenuItem2 = styled.div`
  font-size: 15px;
  cursor: pointer;
  margin-right: 20px;

  ${mobile({ fontSize: "12px", marginLeft: "5px" })}
`;

const Profile = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #cfcfcf;
`;

const StyledMenu = withStyles({})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
        padding: "0 15px",
      },
    },
  },
}))(MenuItem);

// main function
const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  // console.log("cart", quantity);

  //mui
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
            to="/vdr"
          >
            <MenuItem2>VDR</MenuItem2>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/register"
          >
            <MenuItem2>REGISTER</MenuItem2>
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }} to="/login">
            <MenuItem2>SIGN IN</MenuItem2>
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }} to="/cart">
            <MenuItem2>
              <Badge badgeContent={quantity} size={69} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem2>
          </Link>
          <MenuItem>
            <Profile
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              color="primary"
              onClick={handleClick}
            ></Profile>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <StyledMenuItem>
                <ListItemIcon>
                  <AccountCircleOutlined fontSize="medium" />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </StyledMenuItem>

              <Divider />
              <StyledMenuItem>
                <ListItemIcon>
                  <DraftsIcon fontSize="medium" />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </StyledMenuItem>
              <StyledMenuItem>
                <ListItemIcon>
                  <InboxIcon fontSize="medium" />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </StyledMenuItem>
            </StyledMenu>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
