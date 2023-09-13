import styled from "styled-components";
import { CorrectYNObj } from "../pages/Result";

const ContentDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 30px;
  padding: 40px 40px;
  box-sizing: border-box;
  overflow: scroll;
  white-space: pre-wrap;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const ContentBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const Title = styled.div`
  width: 15%;
  font-weight: 600;
  font-size: 18px;
  color: #0acf97;
  text-shadow: 1px 1px 1px lightgray;
`;

const YN = styled.div`
  width: 5%;
`;

const Content = styled.div`
  width: 80%;
`;

interface KeywordResultProps {
  correctYN: CorrectYNObj[];
}

const KeyWordResult = ({ correctYN }: KeywordResultProps) => {
  return (
    <ContentDiv>
      {correctYN.map(({ keyword, yn, content }) => {
        return (
          <ContentBox>
            <Title>{`${keyword} (${yn === "Y" ? "⭕" : "❌"})`}</Title>
            <Content>{content}</Content>
          </ContentBox>
        );
      })}
    </ContentDiv>
  );
};

export default KeyWordResult;
