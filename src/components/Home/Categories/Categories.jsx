import React from "react";
import classes from "./Categories.module.css";
import { categories } from "../../../assets/data/slideData";
import Category from "./Category";
// const Container = styled.div``;

const Categories = () => {
  return (
    <div className={classes.categoryContainer}>
      {categories.map((item,index) => (
        <Category item={item} key={index} />
      ))}
    </div>
  );
};

export default Categories;
