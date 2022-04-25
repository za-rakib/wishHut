import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import { popularProducts } from "../../../assets/data/data";
import { Product } from "./Product";
const axios = require("axios");
// styled components
const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  //  console.log(filters);
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  //   data fetching
  useEffect(() => {
    // fetch(`http://localhost:5000/api/products`)
    //    .then((res) => res.json())
    //   .then((data) => console.log(data));
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : `http://localhost:5000/api/products/`
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat]);

  // data sorting
  useEffect(() => {
    if (sort === "newest") {
      setFilterProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilterProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilterProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  //   data filter
  useEffect(() => {
    cat &&
      setFilterProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [cat, filters, products]);

  //console.log("filterProducts", filterProducts);
  //console.log(products);
  return (
    <Container>
      {cat
        ? filterProducts.map((item, index) => (
            <Product item={item} key={index} />
          ))
        : products
            .slice(0, 8)
            .map((item, index) => <Product item={item} key={index} />)}
    </Container>
  );
};

export default Products;
