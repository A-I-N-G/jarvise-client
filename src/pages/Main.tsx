import { Link } from "react-router-dom";
import styled from "styled-components";
// import ImageSrc from '../../public/images/MainImage.jpg';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const MainImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const DimmedLayer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const Contents = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 36px;
  font-weight: 600;
`;

const Content = styled.div`
  width: 40%;
  color: white;
  margin-bottom: 40px;
`;

const StyledLink = styled(Link)`
  padding: 15px 30px;
  text-decoration: none;
  background-color: #0acf97;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

const Main = () => {
  return (
    <Wrapper>
      <DimmedLayer />
      <MainImage src="images/MainPage.png" />
      <Contents>
        <Content>AI 기반 자기소개서 분석 서비스</Content>
        <StyledLink to="/hire">시작하기</StyledLink>
      </Contents>
    </Wrapper>
  );
};

export default Main;
