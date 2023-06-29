import axios from "axios";

interface Params {
  companyId: number;
  positionId: number;
  positionName: string;
  keywordList: string[];
  introduction: string;
  itemList?: string[];
}

export const BASE_URL = "http://localhost:8080";

export const insertEmployment = async (params: Params) => {
  try {
    await axios.post(`${BASE_URL}/saveRecruit`, params);
  } catch (e) {
    alert(e);
  }
};

export const test = async (params: Params) => {
  try {
    await axios.post(`${BASE_URL}/applicants`, {
      name: "김혜민",
      birthday: "2023.06.29",
      gender: "FEMALE",
    });
  } catch (e) {
    alert(e);
  }
};
