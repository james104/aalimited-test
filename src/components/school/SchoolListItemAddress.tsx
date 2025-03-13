import type { FC } from "react";
import React from "react";
import addressImg from "../../assets/images/address.svg";
import { School } from "../../types/school";
import Img from "../common/Img";

const SchoolListItemAddress: FC<Pick<School, "address">> = ({ address }) => {
  return (
    <div className="schoolListItemAddress">
      <Img src={addressImg} />
      <p>{address}</p>
    </div>
  );
};

export default SchoolListItemAddress;
