import styled from "styled-components";

const ContentDiv = styled.div`
  width: 32%;
  height: 100%;
  background-color: #fff;
  border-radius: 30px;
  padding: 30px 50px;
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
  margin-bottom: 30px;
`;

const Title = styled.div`
  width: 15%;
  margin-bottom: 10px;
  font-size: 18px;
`;

const ContentStrength = styled.div`
  font-weight: 600;
  width: 100%;
  color: #8b93f7;
`;

const ContentWeakness = styled.div`
  font-weight: 600;
  width: 100%;
  color: #fa6986;
`;

const PersonalityResult = () => {
  return (
    <ContentDiv>
      <ContentBox>
        <Title>강점</Title>
        <ContentStrength>
          열정 / 자기주도성 / 학습능력 / 꾸준함 / 우수 교육생
        </ContentStrength>
      </ContentBox>
      <ContentBox>
        <Title>단점</Title>
        <ContentWeakness>
          전공 분야 변경 / 경력 부족 / 새로운 도전의 힘듦 / 지속적인 동기 부여
          필요 / 토목공학 관련 실무 경험 부족
        </ContentWeakness>
      </ContentBox>
    </ContentDiv>
  );
};

export default PersonalityResult;
