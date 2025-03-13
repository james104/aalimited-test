import type { FC } from "react";
import React from "react";
import { School } from "../../types/school";
import SchoolListItemAddress from "./SchoolListItemAddress";
import SchoolListItemDate from "./SchoolListItemDate";
import SchoolListItemType from "./SchoolListItemType";

const SchoolListItem: FC<{ school: School }> = ({
  school: { name, type, address, lastUpdatedDate },
}) => {
  return (
    <div className="schoolListItem">
      <p>{name}</p>
      <div className="schoolListItemData schoolListItemDataLeft">
        <SchoolListItemAddress address={address} />
        <div className="schoolListItemData schoolListItemDataRight">
          <SchoolListItemDate lastUpdatedDate={lastUpdatedDate} />
          <SchoolListItemType type={type} />
        </div>
      </div>
    </div>
  );
};

export default SchoolListItem;
