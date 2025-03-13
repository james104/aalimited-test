import type { FC } from "react";
import React from "react";
import ThemedView from "~/components/view/ThemedView";
import { School } from "../../types/school";

const SchoolListItemType: FC<Pick<School, "type">> = ({ type }) => {
  return (
    <div className="schoolListItemType">
      <p>{type}</p>
    </div>
  );
};

export default SchoolListItemType;
