import type { FC } from "react";
import React from "react";
import { iconName } from "../../utils/icon/const";
import Btn from "../common/Btn";

const HomeBookmarksBtn: FC<{}> = ({}) => {
  return <Btn className="homeBookmarksBtn" iconName={iconName.bookmarks} />;
};

export default HomeBookmarksBtn;
