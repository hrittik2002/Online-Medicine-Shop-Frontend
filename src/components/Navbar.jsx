import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { publicRequest } from "../requestMethod";
import { useNavigate } from "react-router-dom";

/**** STYLED COMPONENTS ****/
const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

// Left of Navbar
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  width: 30vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 25px;
  padding: 10px;
  ${mobile({ marginLeft: "2px" })}
`;
const Input = styled.input`
  border: none;
`;

// Center of NavBar
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

// Right of Navbar
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 4, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "5px" })}
`;

/**** NAVBAR COMPONENT ****/

const Navbar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState("");
  const quantity = useSelector((state) => state.cart.quantity);
  console.log(quantity);

  const handleClick = () => {
    if (search != "") {
      navigate(`/products/${search}`);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>HG PHARMACY</Logo>
        </Left>
        <Center>
          <SearchContainer
            onClick={() => {
              handleClick();
            }}
          >
            <Input
              placeholder="search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <SearchIcon style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
