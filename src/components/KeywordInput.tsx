import styled from "styled-components";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { KeyWords } from "./KeyWordBox";

const Keyword = styled.input`
  border: none;
  border-radius: 5px;
  background-color: rgb(245, 246, 250);
  width: 10%;
  padding: 10px 20px;
  margin-right: 10px;
  margin-bottom: 5px;
`;

interface KeyWordBoxProps {
  id: number;
  value: string;
  setKewordList: Dispatch<SetStateAction<KeyWords[]>>;
}

const KeyWordInput = ({ id, value, setKewordList }: KeyWordBoxProps) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    setKewordList((prev) => {
      const temp = [...prev];
      temp[id].value = value;
      return temp;
    });
  };
  return <Keyword value={value} onChange={onChange} />;
};

export default KeyWordInput;
