import styled from "styled-components";

const MenuDiv = styled.div`
  color: #ffffff;
  font-size: 16px;
  padding-left: 30px;
  height: 60px;
`;

const Span = styled.span`
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    font-size: 20px;
    font-weight: 600;
  }
`;

interface MenuProps {
  text: string;
}

const Menu = ({ text }: MenuProps) => {
  return (
    <MenuDiv>
      <Span>{text}</Span>
    </MenuDiv>
  );
};

export default Menu;
