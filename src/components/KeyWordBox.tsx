import styled from "styled-components";
import { MouseEvent } from "react";
import KeyWordInput from "./KeywordInput";

const Box = styled.div`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  width: 15%;
  font-weight: 600;
`;

const SmallBox = styled.div`
  width: 85%;
`;

const AddBtn = styled.button`
  padding: 10px 20px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  background-color: #8b93f7;
  color: white;
  margin-left: 10px;
  border-radius: 5px;
`;

const KeyWordBox = () => {
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
      <Label>키워드</Label>
      <SmallBox>
        <KeyWordInput />
        <AddBtn onClick={onClick}>+</AddBtn>
      </SmallBox>
    </Box>
  );
};

export default KeyWordBox;
