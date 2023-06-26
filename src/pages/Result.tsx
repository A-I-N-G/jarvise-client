import Wrapper from "../components/Wrapper";
import styled from "styled-components";
import GraphResult from "../components/GraphResult";
import KeyWordResult from "../components/KeyWordResult";
import PersonalityResult from "../components/PersonalityResult";
import QuestionResult from "../components/QuestionResult";
import ETCResult from "../components/ETCResult";

const ContentBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
  height: 90%;
  top: 5%;
  left: 5%;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const ContentDiv = styled.div`
  width: 100%;
  height: 48%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

const Result = () => {
  return (
    <Wrapper>
      <ContentBox>
        <ContentDiv>
          <GraphResult />
          <KeyWordResult />
        </ContentDiv>
        <ContentDiv>
          <PersonalityResult />
          <QuestionResult />
          <ETCResult />
        </ContentDiv>
      </ContentBox>
    </Wrapper>
  );
};

export default Result;
