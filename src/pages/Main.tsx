import styled from "styled-components";
// import ImageSrc from '../../public/images/MainImage.jpg';

const MainImage = styled.div`
  background-image: url("/images/MainImage.jpg");
`;

const Main = () => {
  return (
  <div>
    <MainImage></MainImage>
  </div>);
};

export default Main;
