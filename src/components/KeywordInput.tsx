import styled from "styled-components";
import { useState, ChangeEvent } from "react";

const Keyword = styled.input`
  border: none;
  border-radius: 5px;
  background-color: rgb(245, 246, 250);
  width: 10%;
  padding: 10px 20px;
  margin-right: 10px;
  margin-bottom: 5px;
`;

const KeyWordInput = () => {
  const [value, setValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };
  return <Keyword value={value} onChange={onChange} />;
};

export default KeyWordInput;
