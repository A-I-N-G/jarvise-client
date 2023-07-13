import styled from "styled-components";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { KeyWords } from "./KeyWordBox";

const Question = styled.textarea`
  border: none;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: rgb(245, 246, 250);
  width: 100%;
  padding: 10px 20px;
  margin-bottom: 5px;
  resize: none;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

interface QuestionBoxProps {
  id: number;
  value: string;
  setQuestionList: Dispatch<SetStateAction<KeyWords[]>>;
}

const QuestionInput = ({ id, value, setQuestionList }: QuestionBoxProps) => {
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = e;

    setQuestionList((prev) => {
      const temp = [...prev];
      temp[id].value = value;
      return temp;
    });
  };

  return <Question value={value} onChange={onChange} />;
};

export default QuestionInput;
