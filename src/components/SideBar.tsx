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
      <Menu text="홈" linkUrl="/" />
      <Menu text="채용 공고" linkUrl="/hire" />
      <Menu text="자기소개서" linkUrl="/resume" />
      <Menu text="결과" linkUrl="/result" />
      <Menu text="채용 등록" linkUrl="/register" />
    </SideBarDiv>
  );
};

export default SideBar;
