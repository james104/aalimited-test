import type { FC } from "react";
import React from "react";
import Img from "./Img";

const Icon: FC<{ name: string }> = ({ name }) => {
  return <Img src={name} />;
};

export default Icon;
