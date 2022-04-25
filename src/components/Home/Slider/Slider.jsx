import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import classes from "./Slider.module.css";
import { slideItems } from "../../../assets/data/data";
import styled from "styled-components";
import { mobile } from "../../../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })};
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Arrow = styled.div`
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #${(props) => props.bg};
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  // console.log("slideIndex", slideIndex);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow
        direction="left"
        className={classes.sliderArrow}
        onClick={() => handleClick("left")}
      >
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {slideItems.map((item, index) => (
          <Slide bg={item.bg} key={index}>
            <div className={classes.imgContainer}>
              <img src={item.img} alt="pic" />
            </div>
            <div className={classes.infoContainer}>
              <h1>{item.title}</h1>
              <p>{item.des}</p>

              <button>SHOW NOW</button>
            </div>
          </Slide>
        ))}
      </Wrapper>
      <Arrow
        direction="right"
        className={classes.sliderArrow}
        onClick={() => handleClick("right")}
      >
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
