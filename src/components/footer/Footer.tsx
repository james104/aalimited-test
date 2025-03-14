import type { FC } from "react";
import React from "react";
import w3c from "../../assets/images/w3c.svg";
import wfa from "../../assets/images/wfa.svg";
import Img from "../common/Img";
import FooterBtn from "./FooterBtn";

const Footer: FC<{}> = ({}) => {
  return (
    <div className="footer">
      <div className="footerContent">
        <Img src={w3c} />
        <Img src={wfa} />
      </div>
      <div className="footerBtns">
        <FooterBtn>Important Legal Notices</FooterBtn>
        <FooterBtn>Sitemap</FooterBtn>
        <FooterBtn>Accessibility</FooterBtn>
      </div>
      <p>Copyright © AIO Study Platform</p>
    </div>
  );
};

export default Footer;
