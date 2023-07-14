import axios from "axios";

interface CompanyDto {
  id: number;
  name: string;
}

interface positionDto {
  id: number;
  name: string;
  introduction: string;
}

interface Params {
  companyDto: CompanyDto;
  positionDto: positionDto;
  keywordList: string[];
  itemList?: string[];
}

export const BASE_URL = "http://localhost:8080";

export const registerEmployment = async (params: Params) => {
  try {
    await axios.post(`${BASE_URL}/job-postings`, params);
  } catch (e) {
    alert(e);
  }
};

export const getEmployment = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/job-postings`);
    return data;
  } catch (e) {
    alert(e);
  }
};
