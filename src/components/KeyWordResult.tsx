import styled from "styled-components";

const ContentDiv = styled.div`
  width: 66%;
  height: 100%;
  background-color: #fff;
  border-radius: 30px;
  padding: 30px 50px;
  box-sizing: border-box;
  overflow: scroll;
  white-space: pre-wrap;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const ContentBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Title = styled.div`
  width: 15%;
  font-weight: 600;
  font-size: 18px;
  color: #0acf97;
`;

const Content = styled.div`
  width: 85%;
`;

const KeyWordResult = () => {
  return (
    <ContentDiv>
      <ContentBox>
        <Title>도전</Title>
        <Content>
          자기소개서에서 지원자가 언급한 대학 전공과는 다른 분야인 웹 개발에
          대한 흥미와 웹 개발을 위해 퇴사를 결정한 열정적인 태도 등, 새로운
          도전을 향한 의지와 노력이 엿보입니다. 이를 토대로 9점을 부여했습니다.
        </Content>
      </ContentBox>
      <ContentBox>
        <Title>열정</Title>
        <Content>
          자기소개서에서 지원자가 웹 개발에 대한 흥미와 삼성 청년 SW 아카데미
          참여를 통해 열정적으로 교육에 참가한 경험을 언급하고 있습니다. 이를
          바탕으로 10점을 부여했습니다.
        </Content>
      </ContentBox>
      <ContentBox>
        <Title>소통</Title>
        <Content>
          자기소개서에서는 소통에 대한 구체적인 예시가 부족하며, 주로 개인적인
          경험과 역량에 초점을 맞추고 있습니다. 이에 7점을 부여했습니다.
        </Content>
      </ContentBox>
      <ContentBox>
        <Title>창의</Title>
        <Content>
          자기소개서에서는 삼성 청년 SW 아카데미 참여를 통해 웹 개발뿐만 아니라
          SW 기초 지식과 알고리즘 등 다양한 영역을 배웠다고 언급하고 있습니다.
          이를 바탕으로 8점을 부여했습니다.
        </Content>
      </ContentBox>
      <ContentBox>
        <Title>파트너십</Title>
        <Content>
          자기소개서에서는 주로 개인적인 역량과 경험에 초점을 맞추고 있으며,
          특별히 파트너십에 대한 구체적인 사례나 협업 경험을 언급하지 않고
          있습니다. 이에 6점을 부여했습니다.
        </Content>
      </ContentBox>
    </ContentDiv>
  );
};

export default KeyWordResult;
