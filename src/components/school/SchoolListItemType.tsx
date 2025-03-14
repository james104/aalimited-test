import type { FC } from "react";
import React from "react";
import ThemedView from "~/components/view/ThemedView";
import { School } from "../../types/school";

const SchoolListItemType: FC<Pick<School, "type">> = ({ type }) => {
  return (
    <div className="schoolListItemType">
      <p className="font-label2" style={{ color: "var(--primary600)" }}>
        {type}
      </p>
    </div>
  );
};

export default SchoolListItemType;
