import { ReactNode } from "react";
import styled from "styled-components";

const Box = styled.div`
  background-color: #fff;
  border-radius: 30px;
  width: 100%;
  height: 100%;
  padding: 30px 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

interface BigCardProps {
  children: ReactNode;
}

const BigCard = ({ children }: BigCardProps) => {
  return <Box>{children}</Box>;
};

export default BigCard;
