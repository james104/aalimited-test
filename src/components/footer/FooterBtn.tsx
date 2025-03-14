import type { FC, PropsWithChildren } from "react";
import React from "react";
import Btn from "../common/Btn";

const FooterBtn: FC<PropsWithChildren> = ({ children }) => {
  return <Btn className="footerBtn font-label2">{children}</Btn>;
};

export default FooterBtn;
