import type { FC } from "react";
import React, { useCallback } from "react";
import { HeaderTabProps } from "../../types/header";
import Btn from "../common/Btn";

const HeaderTab: FC<HeaderTabProps> = ({ name, url }) => {
  const toUrl = useCallback(() => {
    console.log("HeaderTab toUrl url", url);
  }, [url]);

  return (
    <Btn onClick={toUrl} className="headerTab btn-disable-hover">
      {name}
    </Btn>
  );
};

export default HeaderTab;
