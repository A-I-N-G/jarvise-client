import styled from "styled-components";
import Wrapper from "../components/Wrapper";
import Card from "../components/Card";

const ContentBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 90%;
  height: 90%;
  position: relative;
  top: 5%;
  left: 5%;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const Hire = () => {
  return (
    <Wrapper>
      <ContentBox>
        <Card
          title="직무명"
          keyword="키워드"
          intro="직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개직무소개"
        />
        <Card title="직무명" keyword="키워드" intro="직무소개" />
        <Card title="직무명" keyword="키워드" intro="직무소개" />
        <Card title="직무명" keyword="키워드" intro="직무소개" />
        <Card title="직무명" keyword="키워드" intro="직무소개" />
        <Card title="직무명" keyword="키워드" intro="직무소개" />
        <Card title="직무명" keyword="키워드" intro="직무소개" />
        <Card title="직무명" keyword="키워드" intro="직무소개" />
      </ContentBox>
    </Wrapper>
  );
};

export default Hire;
