import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import classes from "./Slider.module.css";
import slide4 from "../../assets/slidePic4-remove.png";
import styled from "styled-components";

const Arrow = styled.div`
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
`;

const Slider = () => {
  return (
    <div className={classes.sliderContainer}>
      <Arrow direction="left" className={classes.sliderArrow}>
        <ArrowLeftOutlined />
      </Arrow>
      <div className={classes.slideWrapper}>
        <div className={classes.slides}>
          <div className={classes.imgContainer}>
            <img src={slide4} alt="pic" />
          </div>
          <div className={classes.infoContainer}>
            <h1>SUMMER SAL</h1>
            <p>DON'T COMPARES ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVAL</p>
            <button>SHOW NOW</button>
          </div>
        </div>
      </div>
      <Arrow direction="right" className={classes.sliderArrow}>
        <ArrowRightOutlined />
      </Arrow>
    </div>
  );
};

export default Slider;
