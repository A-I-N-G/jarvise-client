import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  position: relative;
`;

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return <Box>{children}</Box>;
};

export default Wrapper;
