import styled from "styled-components";
import Menu from "./Menu";

const SideBarDiv = styled.div`
  width: 15%;
  max-width: 250px;
  background-color: #313a46;
  padding: 60px 0;
`;

const SideBar = () => {
  return (
    <SideBarDiv>
      <Menu text="채용 공고" />
      <Menu text="자기소개서" />
      <Menu text="결과" />
      <Menu text="채용 등록" />
    </SideBarDiv>
  );
};

export default SideBar;
