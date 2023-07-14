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
  font-size: 14px;
  color: #f1b618;
`;

const Content = styled.div`
  width: 85%;
`;

const QuestionResult = () => {
  return (
    <ContentDiv>
      <ContentBox>
        <Title>질문1</Title>
        <Content>
          ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
        </Content>
      </ContentBox>
      <ContentBox>
        <Title>질문2</Title>
        <Content>
          ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
        </Content>
      </ContentBox>
      <ContentBox>
        <Title>질문3</Title>
        <Content>
          ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
        </Content>
      </ContentBox>
    </ContentDiv>
  );
};

export default QuestionResult;
