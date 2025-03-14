import type { ChangeEventHandler, FC, RefObject } from "react";
import React, { useCallback } from "react";
import Btn from "../common/Btn";

const SchoolSearchBar: FC<{
  searchBarInputValRef: RefObject<string>;
  searchSchools: () => void;
}> = ({ searchBarInputValRef, searchSchools }) => {
  const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target: { value } }) => {
      searchBarInputValRef.current = value;
    },
    [searchBarInputValRef]
  );

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
