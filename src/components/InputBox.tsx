import styled from "styled-components";
import { Dispatch, SetStateAction } from "react";

const Box = styled.div`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  width: 15%;
  font-weight: 600;
`;

const Input = styled.input`
  border: none;
  border-radius: 5px;
  background-color: rgb(245, 246, 250);
  width: 85%;
  padding: 10px 20px;
`;

const Textarea = styled.textarea`
  border: none;
  border-radius: 5px;
  background-color: rgb(245, 246, 250);
  width: 85%;
  height: 100px;
  padding: 10px 20px;
  resize: none;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

interface InputBoxProps {
  type: string;
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const InputBox = ({ type, label, value, setValue }: InputBoxProps) => {
  if (type === "text") {
    return (
      <Box>
        <Label>{label}</Label>
        <Input
          type={type}
          value={value}
          onChange={(e) => {
            const {
              target: { value },
            } = e;
            setValue(value);
          }}
        />
      </Box>
    );
  } else if (type === "textarea") {
    return (
      <Box>
        <Label>{label}</Label>
        <Textarea
          value={value}
          onChange={(e) => {
            const {
              target: { value },
            } = e;
            setValue(value);
          }}
        ></Textarea>
      </Box>
    );
  }
  return null;
};

export default InputBox;
