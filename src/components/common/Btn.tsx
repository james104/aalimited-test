import type { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import React, { useMemo } from "react";
import Icon from "./Icon";

const Btn: FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    iconName?: string;
    iconFlip?: boolean;
  }
> = ({ className, children, iconName, iconFlip = false, ...props }) => {
  const icon = useMemo(
    () => (iconName ? <Icon name={iconName} /> : null),
    [iconName]
  );

  return (
    <div
      className={`btn font-label1${className ? ` ${className}` : ""}`}
      {...props}
    >
      {iconFlip && icon}
      {!!children && <p>{children}</p>}
      {!iconFlip && icon}
    </div>
  );
};

export default Btn;
