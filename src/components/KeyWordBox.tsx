import styled from "styled-components";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
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

interface KeyWordBoxProps {
  setKeywords: Dispatch<SetStateAction<string[]>>;
}

export interface KeyWords {
  id: number;
  value: string;
}

const KeyWordBox = ({ setKeywords }: KeyWordBoxProps) => {
  const [keywordList, setKewordList] = useState<KeyWords[]>([
    { id: 0, value: "" },
  ]);

  useEffect(() => {
    const keywords: string[] = [];
    keywordList.forEach(({ value }) => {
      keywords.push(value);
    });
    setKeywords(keywords);
  }, [keywordList]);

  const onClick = () => {
    const temp: KeyWords = { id: 0, value: "" };
    temp["id"] = keywordList.length;
    setKewordList((prev) => {
      const newList = [...prev];
      newList.push(temp);
      return newList;
    });
  };

  return (
    <Box>
      <Label>키워드</Label>
      <SmallBox>
        {keywordList.map(({ id, value }) => (
          <KeyWordInput id={id} value={value} setKewordList={setKewordList} />
        ))}
        <AddBtn onClick={onClick}>+</AddBtn>
      </SmallBox>
    </Box>
  );
};

export default KeyWordBox;
