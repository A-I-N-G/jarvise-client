import styled from "styled-components";

const ContentDiv = styled.div`
  width: 32%;
  height: 100%;
  background-color: #fff;
  border-radius: 30px;
  padding: 40px 40px;
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
  color: #732bc4;
  // color: #f1b618;
  font-weight: bold;
  text-shadow: 1px 1px 1px lightgray;
`;

const Content = styled.div`
  width: 100%;
`;

const QuestionResult = () => {
  return (
    <ContentDiv>
      <ContentBox>
        <Title>✔️ 질문 1</Title>
        <Content>
          자기소개서에서 언급한 열정적인 웹 개발 학습 경험과 삼성 청년 SW
          아카데미 참여에 대해 자세히 설명해주실 수 있을까요?
        </Content>
      </ContentBox>
      <ContentBox>
        <Title>✔️ 질문 2</Title>
        <Content>
          대학에서 토목공학을 전공하고 퇴사 후 웹 개발에 관심을 갖게 된 이유는
          무엇이었나요? 토목공학과 웹 개발 간의 관련성을 어떻게 인식하고
          계셨나요?
        </Content>
      </ContentBox>
      <ContentBox>
        <Title>✔️ 질문 3</Title>
        <Content>
          꾸준함과 열정은 제가 매우 중요하게 생각하는 가치입니다. 자신이
          꾸준하게 학습하고 열정을 유지하는 데 어떤 방법이 가장 효과적이었다고
          생각하시나요? 어떻게 동기를 유지하며 학습에 집중하셨나요?
        </Content>
      </ContentBox>
    </ContentDiv>
  );
};

export default QuestionResult;
