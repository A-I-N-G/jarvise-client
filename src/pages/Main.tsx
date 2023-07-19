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
  border: 1px solid white;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Content = styled.div`
  width: 40%;
  border: 1px solid white;
  font-size: 36px;
  font-weight: 600;
  color: white;
`;

const Main = () => {
  return (
    <Wrapper>
      <DimmedLayer />
      <MainImage src="images/MainPage.png" />
      {/* <Contents>
        <Content>aa</Content>
        <Content>bb</Content>
      </Contents> */}
    </Wrapper>
  );
};

export default Main;
