import type { FC } from "react";
import React, { useCallback } from "react";
import { School } from "../../types/school";
import Btn from "../common/Btn";
import SchoolListItem from "./SchoolListItem";
import { iconName } from "../../utils/icon/const";

const SchoolList: FC<{
  fetchingSchools: boolean;
  fetchedAllSchools: boolean;
  schools: School[];
  searchSchools: (refresh?: boolean) => void;
}> = ({ fetchingSchools, fetchedAllSchools, schools, searchSchools }) => {
  const fetchNextPage = useCallback(() => {
    searchSchools(false);
  }, [searchSchools]);

  const noResults = !fetchingSchools && !schools.length;
  const showMoreBtn = !fetchingSchools && !fetchedAllSchools && !noResults;

  return (
    <div className="schoolList">
      <div>
        <h2>Popular schools</h2>
      </div>
      <div className="schoolListItems">
        {noResults ? (
          <p>No Results</p>
        ) : (
          schools.map((school) => (
            <SchoolListItem key={school.id} school={school} />
          ))
        )}
        {fetchingSchools && <p>Fetching Schools...</p>}
      </div>
      {showMoreBtn && (
        <Btn
          className="schoolListBtn btn-disable-hover"
          onClick={fetchNextPage}
          iconName={iconName.add}
          iconFlip={true}
        >
          More
        </Btn>
      )}
    </div>
  );
};

export default SchoolList;
