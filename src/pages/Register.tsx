import Wrapper from "../components/Wrapper";
import styled from "styled-components";
import InputBox from "../components/InputBox";
import { useState, MouseEvent } from "react";
import KeyWordBox from "../components/KeyWordBox";
import QuestionBox from "../components/QuestionBox";
import { registerEmployment } from "../axios/recruit";
import { useNavigate } from "react-router-dom";

const ContentBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 90%;
  height: 90%;
  position: relative;
  top: 5%;
  left: 5%;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 30px;
  width: 100%;
  height: 100%;
  padding: 30px 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const ContentDiv = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  margin-bottom: 20px;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const SubmitBtn = styled.button`
  width: 100px;
  border: none;
  cursor: pointer;
  background-color: #0acf97;
  color: white;
  margin-left: 10px;
  padding: 10px 20px;
  border-radius: 10px;
`;

const Register = () => {
  const navigate = useNavigate();

  const [jobName, setJobName] = useState("");
  const [jobIntro, setJobIntro] = useState("");
  const [keywords, setKeywords] = useState<string[]>([]);
  const [questions, setQuestions] = useState<string[]>([]);

  const onClick = async (e: MouseEvent<HTMLButtonElement>) => {
    const params = {
      companyDto: {
        id: 1,
        name: "현대IT&E",
      },
      itemList: questions,
      keywordList: keywords,
      positionDto: {
        id: 1,
        introduction: jobIntro,
        name: jobName,
      },
    };

    await registerEmployment(params);
    alert("채용 공고가 등록되었습니다.");
    navigate("/hire");
  };
  return (
    <Wrapper>
      <ContentBox>
        <Box>
          <ContentDiv>
            <InputBox
              type="text"
              label="직무명"
              value={jobName}
              setValue={setJobName}
            />
            <KeyWordBox setKeywords={setKeywords} />
            <InputBox
              type="textarea"
              label="직무 소개"
              value={jobIntro}
              setValue={setJobIntro}
            />
            <QuestionBox setQuestions={setQuestions} />
          </ContentDiv>
          <SubmitBtn onClick={onClick}>등록</SubmitBtn>
        </Box>
      </ContentBox>
    </Wrapper>
  );
};

export default Register;
