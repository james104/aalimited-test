import type { FC } from "react";
import React from "react";
import ThemedView from "~/components/view/ThemedView";
import { School } from "../../types/school";

const SchoolListItemDate: FC<Pick<School, "lastUpdatedDate">> = ({
  lastUpdatedDate,
}) => {
  return (
    <div className="schoolListItemDate">
      <p>Last Updated Date</p>
      <p>{lastUpdatedDate}</p>
    </div>
  );
};

export default SchoolListItemDate;
