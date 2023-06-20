import Wrapper from "../components/Wrapper";
import styled from "styled-components";
import InputBox from "../components/InputBox";
import { useState } from "react";

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
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const Register = () => {
  const [jobName, setJobName] = useState("");
  const [jobIntro, setJobIntro] = useState("");

  return (
    <Wrapper>
      <ContentBox>
        <Box>
          <InputBox
            type="text"
            label="직무명"
            value={jobName}
            setValue={setJobName}
          />
          <InputBox
            type="textarea"
            label="직무 소개"
            value={jobIntro}
            setValue={setJobIntro}
          />
        </Box>
      </ContentBox>
    </Wrapper>
  );
};

export default Register;
