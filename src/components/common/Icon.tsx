import type { FC } from "react";
import React from "react";
import Img from "./Img";

const Icon: FC<{ name: string; width?: number; height?: number }> = ({
  name,
  width,
  height,
}) => {
  return <Img src={name} width={width} height={height} />;
};

export default Icon;
