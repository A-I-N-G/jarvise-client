import styled from "styled-components";
import { Questions } from "../pages/Result";

const ContentDiv = styled.div`
  width: 32%;
  height: 100%;
  background-color: #fff;
  border-radius: 30px;
  padding: 40px 40px;
  box-sizing: border-box;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Title = styled.div`
  width: 100%;
  margin-bottom: 10px;
  font-size: 18px;
  color: #732bc4;
  // color: #f1b618;
  font-weight: bold;
  text-shadow: 1px 1px 1px lightgray;
`;

const Content = styled.div`
  width: 100%;
`;

interface QuestionResultProps {
  questions: Questions;
}

const QuestionResult = ({questions} : QuestionResultProps) => {
  return (
    <ContentDiv>
      <ContentBox>
        <Title>✔️ 질문 1</Title>
        <Content>
          {questions.question1}
        </Content>
      </ContentBox>
      <ContentBox>
        <Title>✔️ 질문 2</Title>
        <Content>
          {questions.question2}
        </Content>
      </ContentBox>
      <ContentBox>
        <Title>✔️ 질문 3</Title>
        <Content>
          {questions.question3}
        </Content>
      </ContentBox>
    </ContentDiv>
  );
};

export default QuestionResult;
