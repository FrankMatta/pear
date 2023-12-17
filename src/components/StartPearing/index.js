import React from "react";
import startPearingImg from "../../assets/startPearing.png";
import "./startPearing.scss";
import GreenButton from "../GreenButton";
import arrowUpBlack from "../../assets/arrowUp-black.png";
import pearMobile from "../../assets/pear-mobile.png";
const StartPearing = () => {
  return (
    <div className="container">
      <div className="startPearingContainer">
        <div className="leftSide">
          <h3>Start Pearing...</h3>
          <p>
            Dive into the world of PEAR and start your Peer-to-Peer and
            Over-the-Counter trades today. Happy pearing!
          </p>
          <GreenButton text={"Launch dApp"} image={arrowUpBlack} />
        </div>
        <div className="rightSide">
          <img src={startPearingImg} alt="startPearingImg" />
          <img className="pear-mobile" src={pearMobile} alt="logo mobile" />
        </div>
      </div>
    </div>
  );
};
export default StartPearing;
