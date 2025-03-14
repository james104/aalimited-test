import React, { FC, useMemo } from "react";
import { HeaderTabProps } from "../../types/header";
import Btn from "../common/Btn";
import HeaderTab from "./HeaderTab";
import Logo from "./Logo";
import { iconName } from "../../utils/icon/const";
import LangDropdown from "./LangDropdown";

const Header: FC = () => {
  const tabs = useMemo<HeaderTabProps[]>(
    () => [
      {
        name: "Home",
        url: "/",
      },
      {
        name: "About Us",
        url: "/about_us",
      },
      {
        name: "Schools",
        url: "/schools",
      },
      {
        name: "Media Highlights",
        url: "/media_highlights",
      },
      {
        name: "Help",
        url: "/help",
      },
    ],
    []
  );

  return (
    <>
      <div className="header">
        <Logo />
        <div className="headerActions">
          <LangDropdown />
          <Btn
            iconName={iconName.call}
            iconFlip={true}
            style={{ color: "var(--primary900)", backgroundColor: "unset" }}
          >
            Contact Us
          </Btn>
          <Btn iconName={iconName.login}>Login</Btn>
        </div>
      </div>
      <div className="headerTabs">
        {tabs.map((tab, index) => (
          <HeaderTab key={`${tab.name}_${index}`} {...tab} />
        ))}
      </div>
    </>
  );
};

export default Header;
