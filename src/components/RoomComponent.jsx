import React from "react";
import "../App.scss";
import about from "../about";
import about_1 from "../assets/image-about-dark.jpg";
import about_2 from "../assets/image-about-light.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function RoomComponent({ title, title_text, next, prev, image }) {
  return (
    <main>
      <div className="image-part">
        <img src={image} alt="Product image" />
      </div>
      <div className="title-part">
        <div className="title">
          <h1>{title}</h1>
          <p>{title_text}</p>
          <h4>
            SHOP NOW <FaArrowRight className="icon" />
          </h4>
          <br />
          <div className="button-holder">
            <div className="button" onClick={next}>
              <FaArrowLeft />
            </div>
            <div className="button" onClick={prev}>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>

      <div className="about-part">
        <div className="dark-image">
          <img src={about_1} alt="dark image" />
        </div>

        <div className="about">
          <h3>About our furniture</h3>
          <p>{about}</p>
        </div>

        <div className="light-image">
          <img src={about_2} alt="light image" />
        </div>
      </div>
    </main>
  );
}

export default RoomComponent;
