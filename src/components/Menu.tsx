import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const MenuDiv = styled.div`
  color: #ffffff;
  font-size: 16px;
  padding-left: 30px;
  height: 60px;

  a {
    color: #ffffff;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      font-size: 20px;
      font-weight: 600;
    }
  }
`;

const ClickedSpan = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

interface MenuProps {
  text: string;
  linkUrl: string;
}

const Menu = ({ text, linkUrl }: MenuProps) => {
  const location = useLocation();

  return (
    <MenuDiv>
      {location.pathname === linkUrl ? (
        <ClickedSpan>
          <Link to={linkUrl}>{text}</Link>
        </ClickedSpan>
      ) : (
        <Link to={linkUrl}>{text}</Link>
      )}
    </MenuDiv>
  );
};

export default Menu;
