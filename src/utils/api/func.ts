import { FetchSchoolResponse, RawSchool, School } from "../../types/school";

export function fetchSchools(name?: string, limit?: number, offset?: number) {
  const baseUrl = new URL(
    "https://api.csdi.gov.hk/apim/dataquery/api/?id=edb_rcd_1629267205213_58940&layer=asfps&bbox-crs=HK80&bbox=800000,800000,890000,890000"
  );
  if (name) {
    baseUrl.searchParams.append("Facility_Name", `*${name}*`);
  }
  if (limit) {
    baseUrl.searchParams.append("limit", limit.toString());
  }
  if (offset) {
    baseUrl.searchParams.append("offset", offset.toString());
  }

  return fetch(baseUrl.toString()).then(
    (res) => res.json() as Promise<FetchSchoolResponse>
  );
}

export function fetchSchoolsByName(
  name: string = "",
  limit: number = 4,
  offset: number = 0
) {
  return fetchSchools(name, limit, offset);
}

export function processRawSchools(rawSchools: RawSchool[]) {
  return rawSchools.map<School>(
    ({
      properties: {
        OBJECTID,
        Facility_Name,
        Dataset,
        Address,
        Last_Updated_Date___最後更新日期,
      },
    }) => ({
      id: OBJECTID,
      name: Facility_Name,
      type: Dataset,
      address: Address,
      lastUpdatedDate: new Date(
        Last_Updated_Date___最後更新日期
      ).toLocaleDateString(),
    })
  );
}
