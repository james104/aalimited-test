import type { Dispatch, FC, SetStateAction } from "react";
import React, { useCallback } from "react";
import { Lang } from "../../types/lang";

const LangDropdownItem: FC<
  Lang & { setSelectedLang: Dispatch<SetStateAction<Lang>> }
> = ({ setSelectedLang, ...lang }) => {
  const onClick = useCallback(() => {
    setSelectedLang(lang);
  }, [setSelectedLang, lang]);

  return (
    <div className="langDropdownItem" onClick={onClick}>
      <p>{lang.name}</p>
    </div>
  );
};

export default LangDropdownItem;
