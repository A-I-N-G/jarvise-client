import styled from "styled-components";

const ContentDiv = styled.div`
  width: 32%;
  height: 100%;
  background-color: #fff;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 40px 50px;
  box-sizing: border-box;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  --margin-bottom: 30px;
`;

const Title = styled.div`
  width: 100%;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: bold;
  text-shadow: 1px 1px 1px lightgray;
`;

const ContentStrength = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 30px;
  -- width: 85%;
  color: #7c82d9;
  margin-bottom: 20px;
`;

const ContentPosition = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 30px;
  -- width: 85%;
  color: #fa6986;
`;

const ETCResult = () => {
  return (
    <ContentDiv>
      <ContentBox>
        <Title>🔍 적합도</Title>
        <ContentStrength>72%</ContentStrength>
      </ContentBox>
      <ContentBox>
        <Title>📌 포지션 추천</Title>
        <ContentPosition>프론트엔드 개발</ContentPosition>
      </ContentBox>
    </ContentDiv>
  );
};

export default ETCResult;
