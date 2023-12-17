// @ts-nocheck
import GreenButton from "../GreenButton";
import "./hero.scss";
import HeroImage from "../../assets/hero.png";

import arrowUpBlack from "../../assets/arrowUp-black.png";
import arrowUpWhite from "../../assets/arrowUp-white.png";

const Hero = () => {
  return (
    <section className="hero_section">
      <p className="unleash-the-power-of">
        <span className="text-wrapper">Unleash the Power of </span>
        <span className="span">Decentralization</span>
      </p>

      <p className="hero-phrase">Execute faster, safer and more anonymous trades with pear!</p>

      <div className="actionButton_hero">
        <GreenButton
          text={"Get Started"}
          icon={arrowUpBlack}
          image={arrowUpBlack}
        />
        <button className="whiteButton">
          Buy $PEAR
          <span style={{ margin: "4px" }}>
            <img
              src={arrowUpWhite}
              alt="upArrow"
              width={10}
              height={10}
              style={{ objectFit: "contain", marginLeft: "5px" }}
            />
          </span>
        </button>
      </div>
      <div className="hero-image-container">
        <img src={HeroImage} alt="" />
      </div>
    </section>
  );
};
export default Hero;
