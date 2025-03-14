import type { FC } from "react";
import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import star from "../../assets/images/star.svg";
import { fetchSchoolsByName, processRawSchools } from "../../utils/api/func";
import { schoolReducer } from "../../utils/school/const";
import Img from "../common/Img";
import SchoolList from "../school/SchoolList";
import SchoolSearchBar from "../school/SchoolSearchBar";

const HomeContent: FC<{}> = ({}) => {
  const searchBarInputValRef = useRef<string>("");
  const [fetchingSchools, setFetchingSchools] = useState(false);
  const [fetchedAllSchools, setFetchedAllSchools] = useState(false);
  const [{ schools }, dispatchSchools] = useReducer(schoolReducer, {
    schools: [],
  });
  const searchSchools = useCallback(
    async (refresh = true) => {
      if (fetchingSchools) {
        return;
      }

      setFetchingSchools(true);
      fetchSchoolsByName(
        searchBarInputValRef.current,
        refresh ? 0 : schools.length
      ).then((fetchSchoolRes) => {
        setFetchingSchools(false);
        setFetchedAllSchools(
          refresh
            ? fetchSchoolRes.features.length >= fetchSchoolRes.numberMatched
            : schools.length + fetchSchoolRes.features.length >=
                fetchSchoolRes.numberMatched
        );
        dispatchSchools({
          type: refresh ? "refresh_schools" : "append_schools",
          payload: processRawSchools(fetchSchoolRes.features),
        });
      });
    },
    [
      fetchingSchools,
      setFetchingSchools,
      setFetchedAllSchools,
      schools,
      dispatchSchools,
      searchBarInputValRef,
    ]
  );
  useEffect(() => {
    searchSchools();
  }, []);

  return (
    <div className="content">
      <Img src={star} style={{ alignSelf: "flex-end" }} />
      <SchoolSearchBar
        searchBarInputValRef={searchBarInputValRef}
        searchSchools={searchSchools}
      />
      <SchoolList
        fetchingSchools={fetchingSchools}
        fetchedAllSchools={fetchedAllSchools}
        schools={schools}
        searchSchools={searchSchools}
      />
    </div>
  );
};

export default HomeContent;
