import { ActionDispatch } from "react";

export type RawSchool = {
  geometry: {
    coordinates: [number, number];
    type: string;
  };
  type: string;
  properties: {
    網頁: string;
    Easting___坐標東: number;
    聯絡電話: string;
    Address: string;
    Opening_Hours: string;
    Telephone: string;
    Dataset: string;
    電郵地址: string;
    開放時間: string;
    Email_Address: string;
    Longitude___經度: number;
    Website: string;
    Latitude___緯度: number;
    設施名稱: string;
    數據集: string;
    Northing___坐標北: number;
    OBJECTID: number;
    Fax_Number: string;
    傳真號碼: string;
    地址: string;
    Last_Updated_Date___最後更新日期: string;
    Facility_Name: string;
  };
};

export type School = {
  id: number;
  name: string;
  type: string;
  address: string;
  lastUpdatedDate: string;
};

export type FetchSchoolResponse = {
  timestamp: string;
  features: RawSchool[];
  numberReturned: number;
  type: string;
  numberMatched: number;
};

export type SchoolReducerAction = {
  type: "append_schools" | "refresh_schools";
  payload: School[];
};

export type SchoolReducerState = {
  schools: School[];
};

export type SchoolReducerDispatch = ActionDispatch<
  [action: SchoolReducerAction]
>;
