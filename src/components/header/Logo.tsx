import type { FC } from "react";
import React from "react";
import logo from "../../assets/images/logo.svg";
import Img from "../common/Img";

const Logo: FC = () => {
  return <Img src={logo} width={266} height={60} />;
};

export default Logo;
