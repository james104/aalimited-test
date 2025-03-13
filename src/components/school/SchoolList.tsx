import type { FC } from "react";
import React from "react";
import { School } from "../../types/school";
import SchoolListItem from "./SchoolListItem";

const SchoolList: FC<{
  fetchingSchools: boolean;
  schools: School[];
}> = ({ fetchingSchools, schools }) => {
  return (
    <div className="schoolList">
      <div>
        <p>Popular schools</p>
      </div>
      <div>
        {fetchingSchools ? (
          <p>fetching schools...</p>
        ) : (
          schools.map((school) => (
            <SchoolListItem key={school.id} school={school} />
          ))
        )}
      </div>
    </div>
  );
};

export default SchoolList;
