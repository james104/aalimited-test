import type { ChangeEventHandler, Dispatch, FC, SetStateAction } from "react";
import React, { useCallback, useRef } from "react";
import { SchoolReducerDispatch } from "../../types/school";
import { fetchSchoolsByName, processRawSchools } from "../../utils/api/func";
import Btn from "../common/Btn";

const SchoolSearchBar: FC<{
  setFetchingSchools: Dispatch<SetStateAction<boolean>>;
  dispatchSchools: SchoolReducerDispatch;
}> = ({ setFetchingSchools, dispatchSchools }) => {
  const searchBarInputValRef = useRef<string>("");
  const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target: { value } }) => {
      searchBarInputValRef.current = value;
    },
    [searchBarInputValRef]
  );
  const searchSchools = useCallback(async () => {
    setFetchingSchools(true);
    fetchSchoolsByName(searchBarInputValRef.current).then((fetchSchoolRes) => {
      setFetchingSchools(false);
      dispatchSchools({
        type: "refresh_schools",
        payload: processRawSchools(fetchSchoolRes.features),
      });
    });
  }, [setFetchingSchools, dispatchSchools, searchBarInputValRef]);

  return (
    <div className="schoolSearchBar">
      <input
        className="schoolSearchBarInput"
        placeholder="Search School Address"
        onChange={onChange}
      />
      <Btn onClick={searchSchools}>Search</Btn>
    </div>
  );
};

export default SchoolSearchBar;
