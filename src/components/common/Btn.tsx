import type { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import React from "react";

const Btn: FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ className, ...props }) => {
  return (
    <button
      className={`btn font-label1${className ? ` ${className}` : ""}`}
      {...props}
    />
  );
};

export default Btn;
