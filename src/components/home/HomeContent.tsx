import type { FC } from "react";
import React, { useActionState, useReducer, useState } from "react";
import star from "../../assets/images/star.svg";
import { schoolReducer } from "../../utils/school/const";
import Img from "../common/Img";
import SchoolList from "../school/SchoolList";
import SchoolSearchBar from "../school/SchoolSearchBar";

const HomeContent: FC<{}> = ({}) => {
  const [fetchingSchools, setFetchingSchools] = useState(false);
  const [{ schools }, dispatchSchools] = useReducer(schoolReducer, {
    schools: [],
  });

  return (
    <div className="content">
      <Img src={star} style={{ alignSelf: "flex-end" }} />
      <SchoolSearchBar
        setFetchingSchools={setFetchingSchools}
        dispatchSchools={dispatchSchools}
      />
      <SchoolList fetchingSchools={fetchingSchools} schools={schools} />
    </div>
  );
};

export default HomeContent;
