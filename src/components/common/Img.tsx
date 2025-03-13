import type { DetailedHTMLProps, FC, ImgHTMLAttributes } from "react";
import React from "react";

const Img: FC<
  DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
> = (props) => {
  return <img {...props} />;
};

export default Img;
