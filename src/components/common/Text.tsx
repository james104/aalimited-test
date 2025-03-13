import type { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import React from "react";

const Text: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
> = ({ ...props }) => {
  return <p {...props} />;
};

export default Text;
