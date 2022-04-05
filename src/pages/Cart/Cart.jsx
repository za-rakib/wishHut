import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Footer from "../../components/Shared/Footer/Footer";
import Announcement from "../../components/Shared/Announcement/Announcement";
import Navbar from "../../components/Shared/Navbar/Navbar";

// style components
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  cursor: pointer;
  font-weight: 600;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) => (props.type === "filled" ? "black" : "white")};
  color: ${(props) => (props.type === "filled" ? "white" : "black")};
`;
const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0 20px 0;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Detail = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductSize = styled.span``;

const ProductColor = styled.span`
  height: 20px;
  width: 20px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ProductAmount = styled.span`
  font-size: 20px;
  margin: 5px;
`;

const ProductPrice = styled.span`
  font-size: 20px;
  font-weight: 300;
`;

const Hr = styled.hr`
  border: none;
  background-color: #d9d9d9;
  height: 2px;
`;

const Summary = styled.div`
  flex: 1;
  border: 1.1px solid lightgray;
  padding: 20px;
  border-radius: 5px;
  height: 50vh;
  margin: 20px 0 0 10px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && 500};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 20px;
  color: white;
  background-color: black;
  cursor: pointer;
  border: none;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wish List(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>

        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg" />
                <Detail>
                  <ProductName>
                    <b>Product : </b> NIKE SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID : </b> 7578487457
                  </ProductId>
                  <ProductColor color="black" />

                  <ProductSize>
                    <b>Size : </b> 35.8
                  </ProductSize>
                </Detail>
              </ProductDetail>

              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$100</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg" />
                <Detail>
                  <ProductName>
                    <b>Product : </b> NIKE SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID : </b> 7578487457
                  </ProductId>
                  <ProductColor color="black" />

                  <ProductSize>
                    <b>Size : </b> 35.8
                  </ProductSize>
                </Detail>
              </ProductDetail>

              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$100</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$100</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$6.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$-5.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$101</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
