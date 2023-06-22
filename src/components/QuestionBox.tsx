import styled from "styled-components";
import { MouseEvent } from "react";
import KeyWordInput from "./KeywordInput";
import QuestionInput from "./QuestionInputs";

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

const QuestionBox = () => {
  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { parentNode },
    } = e;
    if (!parentNode) return;
    const newNode = parentNode.childNodes[0].cloneNode();
    parentNode?.insertBefore(newNode, e.currentTarget);
  };
  return (
    <Box>
      <Label>질문</Label>
      <SmallBox>
        <QuestionInput />
        <AddBtn onClick={onClick}>+</AddBtn>
      </SmallBox>
    </Box>
  );
};

export default QuestionBox;
