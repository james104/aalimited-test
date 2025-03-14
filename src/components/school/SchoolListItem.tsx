import type { FC } from "react";
import React from "react";
import { School } from "../../types/school";
import SchoolListItemAddress from "./SchoolListItemAddress";
import SchoolListItemDate from "./SchoolListItemDate";
import SchoolListItemType from "./SchoolListItemType";
import Btn from "../common/Btn";
import { iconName } from "../../utils/icon/const";

const SchoolListItem: FC<{ school: School }> = ({
  school: { name, type, address, lastUpdatedDate },
}) => {
  return (
    <div className="schoolListItem">
      <p className="font-subtitle" style={{ color: "var(--secondary700)" }}>
        {name}
      </p>
      <div className="schoolListItemData schoolListItemDataLeft">
        <SchoolListItemAddress address={address} />
        <div className="schoolListItemData schoolListItemDataRight">
          <SchoolListItemDate lastUpdatedDate={lastUpdatedDate} />
          <SchoolListItemType type={type} />
        </div>
      </div>
      <Btn
        className="schoolListItemBookmark btn-disable-hover"
        iconName={iconName.bookmark}
      />
    </div>
  );
};

export default SchoolListItem;
