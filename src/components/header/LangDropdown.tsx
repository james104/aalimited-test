import type { FC } from "react";
import React, { useMemo, useState } from "react";
import Icon from "../common/Icon";
import { iconName } from "../../utils/icon/const";
import { langs } from "../../utils/lang/const";
import LangDropdownItem from "./LangDropdownItem";

const LangDropdown: FC<{}> = ({}) => {
  const [selectedLang, setSelectedLang] = useState(langs[0]);

  return (
    <div className="langDropdown">
      <div className="langDropdownBtn">
        <Icon name={iconName.language} />
        <p>{selectedLang.name}</p>
        <Icon name={iconName.arrow_dropdown} />
      </div>
      <div className="langDropdownContent">
        {langs
          .filter((lang) => lang.value !== selectedLang.value)
          .map((lang) => (
            <LangDropdownItem
              key={lang.value}
              {...lang}
              setSelectedLang={setSelectedLang}
            />
          ))}
      </div>
    </div>
  );
};

export default LangDropdown;
