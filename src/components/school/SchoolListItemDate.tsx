import type { FC } from "react";
import React from "react";
import ThemedView from "~/components/view/ThemedView";
import { School } from "../../types/school";
import Icon from "../common/Icon";
import { iconName } from "../../utils/icon/const";

const SchoolListItemDate: FC<Pick<School, "lastUpdatedDate">> = ({
  lastUpdatedDate,
}) => {
  return (
    <div className="schoolListItemDate">
      <Icon name={iconName.tick} />
      <div>
        <p className="font-caption2" style={{ color: "var(--neutral600)" }}>
          Last Updated Date
        </p>
        <p className="font-label2" style={{ color: "var(--neutral800)" }}>
          {lastUpdatedDate}
        </p>
      </div>
    </div>
  );
};

export default SchoolListItemDate;
