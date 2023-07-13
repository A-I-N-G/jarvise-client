import styled from "styled-components";
import {
  Dispatch,
  SetStateAction,
  MouseEvent,
  useState,
  useEffect,
} from "react";
import QuestionInput from "./QuestionInputs";
import { KeyWords } from "./KeyWordBox";

const Box = styled.div`
  margin-bottom: 30px;
  display: flex;
  align-items: flex-start;
`;

const Label = styled.label`
  width: 15%;
  font-weight: 600;
`;

const SmallBox = styled.div`
  width: 85%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const AddBtn = styled.button`
  width: 50px;
  padding: 10px 20px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  background-color: #8b93f7;
  color: white;
  margin-left: 10px;
  border-radius: 5px;
`;

interface QuestionBoxProps {
  setQuestions: Dispatch<SetStateAction<string[]>>;
}

const QuestionBox = ({ setQuestions }: QuestionBoxProps) => {
  const [questionList, setQuestionList] = useState<KeyWords[]>([
    { id: 0, value: "" },
  ]);

  useEffect(() => {
    const questions: string[] = [];
    questionList.forEach(({ value }) => {
      questions.push(value);
    });
    setQuestions(questions);
  }, [questionList]);

  const onClick = () => {
    const temp: KeyWords = { id: 0, value: "" };
    temp["id"] = questionList.length;
    setQuestionList((prev) => {
      const newList = [...prev];
      newList.push(temp);
      return newList;
    });
  };

  return (
    <Box>
      <Label>질문</Label>
      <SmallBox>
        {questionList.map(({ id, value }) => (
          <QuestionInput
            id={id}
            value={value}
            setQuestionList={setQuestionList}
          />
        ))}
        <AddBtn onClick={onClick}>+</AddBtn>
      </SmallBox>
    </Box>
  );
};

export default QuestionBox;
