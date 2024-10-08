import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";
import "./Electronic.css";
import MyButton from "../Button/Button";
import E1 from "../../image/iphone2.png";
import E2 from "../../image/realme.png";
import E3 from "../../image/xiomi.png";
const ProductCarousel = () => {
  return (
    <>
      <div className="smart_flex">
        <div className="smart_head">
          Top <span className="smart_color">Electronic Brand</span>
        </div>
        <div className="viewall">
          <MyButton variant="outlined" color="secondary" size="large">
            Viewall
          </MyButton>
        </div>
      </div>
      <div
        className="carousel-container"
        style={{ maxWidth: "1200px",}}
      >
        <Carousel showArrows={true} showThumbs={false} infiniteLoop={true}>
          <div
            className="carousel-slide"
            style={{
              backgroundColor: "#2B2B2B",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <img
              src={E1}
              alt="iPhone"
              style={{ maxHeight: "150px" }}
            />
            <h3 style={{ color: "#fff" }}>IPHONE</h3>
            <p style={{ color: "#fff" }}>UP to 80% OFF</p>
          </div>
          <div
            className="carousel-slide"
            style={{
              backgroundColor: "#F6EFA5",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <img
              src={E2}
              alt="Realme"
              style={{ maxHeight: "150px" }}
            />
            <h3 style={{ color: "#000" }}>REALME</h3>
            <p style={{ color: "#000" }}>UP to 80% OFF</p>
          </div>
          <div
            className="carousel-slide"
            style={{
              backgroundColor: "#FFD1A9",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <img
              src={E3}
              alt="Xiaomi"
              style={{ maxHeight: "150px" }}
            />
            <h3 style={{ color: "#000" }}>XIAOMI</h3>
            <p style={{ color: "#000" }}>UP to 80% OFF</p>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default ProductCarousel;
