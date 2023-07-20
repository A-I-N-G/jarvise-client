import axios from "axios";

interface CoverLetterItemDto {
    answer: string;
}

export const BASE_URL = "http://localhost:5000";

export const getInterviewQuestions = async (param: CoverLetterItemDto) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/interview-questions`, {
        params: {
            answer: param.answer
        }
    });
    return data;
  } catch (e) {
    alert(e);
  }
};

export const getKeywordScore = async (param: CoverLetterItemDto) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/keyword-score`, {
          params: {
              answer: param.answer
          }
      });
      return data;
    } catch (e) {
      alert(e);
    }
  };

  export const getStrength = async (param: CoverLetterItemDto) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/strength`, {
          params: {
              answer: param.answer
          }
      });
      return data;
    } catch (e) {
      alert(e);
    }
  };

  export const getWeakness = async (param: CoverLetterItemDto) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/weakness`, {
          params: {
              answer: param.answer
          }
      });
      return data;
    } catch (e) {
      alert(e);
    }
  };