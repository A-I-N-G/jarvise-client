import styled from "styled-components";

const ContentDiv = styled.div`
  width: 32%;
  height: 100%;
  background-color: #fff;
  border-radius: 30px;
  padding: 50px 50px;
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
  width: 100%;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
  text-shadow: 1px 1px 1px lightgray;
`;

const ContentWrapper = styled.div`
  clear:both;
  float:left;
  `;

  const ContentStrength = styled.div`
  font-weight: 600;
  color: white;
  font-size: 20px;
  border: 0px;
  border-radius: 15px;
  padding: 10px;
  background-color: #0acf97;
  margin: 4px;
  float: left;
  display:inline-block;
  `;  

const ContentWeakness = styled.div`
  font-weight: 600;
  color: white;
  font-size: 20px;
  border: 0px;
  border-radius: 15px;
  padding: 10px;
  background-color: #fa6986;
  margin: 4px;
  float: left;
  display:inline-block;
`;

const PersonalityResult = () => {
  return (
    <ContentDiv>
      <ContentBox>
        <Title>🍀 강점</Title>
        <ContentWrapper>
          <ContentStrength>
            열정
          </ContentStrength>
          <ContentStrength>
            자기주도성
          </ContentStrength>
          <ContentStrength>
            꾸준함
          </ContentStrength>
          <ContentStrength>
            학습능력
          </ContentStrength>
          <ContentStrength>
            우수 교육생
          </ContentStrength>
        </ContentWrapper>
      </ContentBox>
      <ContentBox>
        <Title>🚨 단점</Title>
        <ContentWrapper>
          <ContentWeakness>
            전공 분야 변경
          </ContentWeakness>
          <ContentWeakness>
            경력 부족
          </ContentWeakness>
          <ContentWeakness>
            새로운 도전의 힘듦
          </ContentWeakness>
          <ContentWeakness>
            지속적인 동기 부여 필요
          </ContentWeakness>
          <ContentWeakness>
            토목공학 관련 실무 경험 부족
          </ContentWeakness>
        </ContentWrapper>
      </ContentBox>
    </ContentDiv>
  );
};

export default PersonalityResult;
