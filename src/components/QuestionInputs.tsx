import styled from "styled-components";
import { useState, ChangeEvent } from "react";

const Question = styled.textarea`
  border: none;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: rgb(245, 246, 250);
  width: 100%;
  padding: 10px 20px;
  margin-bottom: 5px;
`;

const QuestionInput = () => {
  const [value, setValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };
  return <Question value={value} onChange={onChange} />;
};

export default QuestionInput;
