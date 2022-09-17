import React, { Component } from "react";

const bikiniTopClass = {
  background: "url(./images/clothes/topcloth1.png)",
  height: "1000px",
  left: "-5%",
  position: "absolute",
  top: "-30%",
  transform: "scale(0.5)",
  width: "500px",
  zIndex: "3",
};
const bikiniBottomClass = {
  width: "500px",
  height: "1000px",
  background: `url(./images/clothes/botcloth5.png)`,
  position: "absolute",
  top: "-30%",
  left: "-5%",
  zIndex: "5",
  transform: "scale(0.5)",
};
class Bikini extends Component {
  render() {
    const styles = {
      // .bikiniTop
      bikiniTopClass,
      // .bikiniBottom
      bikiniBottomClass,
    };
    if (this.props.selectedItem) {
      if (this.props.selectedItem.default === true) {
        styles.bikiniTopClass = bikiniTopClass;
        if (this.props.selectedItem.type === "topclothes") {
          styles.bikiniTopClass = bikiniTopClass;
        } else if (this.props.selectedItem.type === "botclothes") {
          styles.bikiniBottomClass = bikiniBottomClass;
        }
      } else {
        if (this.props.selectedItem.type === "topclothes") {
          styles.bikiniTopClass = {
            width: "500px",
            height: "1000px",
            background: `url(${this.props.selectedItem.imgSrc_png})`,
            position: "absolute",
            top: "-30%",
            left: "-5%",
            zIndex: "3",
            transform: "scale(0.5)",
          };
        } else if (this.props.selectedItem.type === "botclothes") {
          styles.bikiniBottomClass = {
            width: "500px",
            height: "1000px",
            background: `url(${this.props.selectedItem.imgSrc_png})`,
            position: "absolute",
            top: "-30%",
            left: "-5%",
            zIndex: "5",
            transform: "scale(0.5)",
          };
        }
      }
    }
    const styleBikini =
      this.props.type === "top"
        ? styles.bikiniTopClass
        : styles.bikiniBottomClass;
    return <div style={styleBikini} />;
  }
}

export default Bikini;
