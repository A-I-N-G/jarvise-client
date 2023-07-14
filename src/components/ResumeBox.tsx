import { MouseEvent, ChangeEvent, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { Question } from "../pages/Resume";
import BigCard from "./BigCard";

const ContentBox = styled.div`
  display: flex;
  position: relative;
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

const ContentDiv = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  margin-bottom: 20px;
  border-bottom: 1px solid black;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const Title = styled.div`
  max-height: 20%;

  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const Content = styled.textarea`
  font-size: 14px;
  height: 80%;
  width: 100%;
  margin-top: 20px;
  box-sizing: border-box;
  padding: 20px 0;
  border: none;
  border-top: 1px solid black;

  &:focus {
    border: none;
  }

  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const NextBtn = styled.button`
  width: 100px;
  border: none;
  cursor: pointer;
  background-color: #0acf97;
  color: white;
  margin-left: 10px;
  padding: 10px 20px;
  border-radius: 10px;
`;

interface ResumeBoxProps {
  title: string;
  id: number;
  idx: number;
  value: string;
  totalCnt: number;
  selectedIdx: number;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  setQuestions: Dispatch<SetStateAction<Question[] | undefined>>;
}

const ResumeBox = ({
  title,
  id,
  idx,
  value,
  totalCnt,
  selectedIdx,
  onClick,
  setQuestions,
}: ResumeBoxProps) => {
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = e;
    setQuestions((prev) => {
      if (!prev) return;
      const newList = [...prev];
      newList[idx].value = value;
      return newList;
    });
  };

  return (
    <ContentBox key={id}>
      <BigCard>
        <ContentDiv>
          <Title>{title}</Title>
          <Content value={value} onChange={onChange} />
        </ContentDiv>
        <div>
          {selectedIdx !== 0 && (
            <NextBtn name="prev" onClick={onClick}>
              이전
            </NextBtn>
          )}
          <NextBtn name="next" onClick={onClick}>
            {totalCnt === selectedIdx + 1 ? "제출" : "다음"}
          </NextBtn>
        </div>
      </BigCard>
    </ContentBox>
  );
};

export default ResumeBox;
