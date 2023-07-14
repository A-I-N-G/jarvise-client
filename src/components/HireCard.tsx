import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Box = styled.div`
  background-color: #fff;
  border-radius: 30px;
  width: 45%;
  height: 40%;
  max-height: 300px;
  margin: 30px 0;
  padding: 30px 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const ContentBox = styled.div`
  font-size: 16px;
  display: flex;
  margin-bottom: 24px;
  position: relative;
  width: 100%;
`;

const Title = styled.div`
  font-weight: 600;
  width: 20%;
`;

const ContentDiv = styled.div`
  width: 100%;
`;

const Content = styled.div`
  width: 80%;
  white-space: pre-wrap;
`;

const ApplyBtn = styled.button`
  width: 100px;
  border: none;
  cursor: pointer;
  background-color: #0acf97;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
`;

interface CardProps {
  id: number;
  title: string;
  keyword: string;
  intro: string;
}

const Card = ({ id, title, keyword, intro }: CardProps) => {
  const navigate = useNavigate();

  const getShortStr = (content: string) =>
    content.length > 150 ? `${content.slice(0, 150)}...` : content;

  const onClick = () => {
    navigate(`/resume/${id}`);
  };
  return (
    <Box>
      <ContentDiv>
        <ContentBox>
          <Title>직무명</Title>
          <Content>{title}</Content>
        </ContentBox>
        <ContentBox>
          <Title>키워드</Title>
          <Content>{keyword}</Content>
        </ContentBox>
        <ContentBox>
          <Title>직무소개</Title>
          <Content>{getShortStr(intro)}</Content>
        </ContentBox>
      </ContentDiv>
      <ApplyBtn onClick={onClick}>지원하기</ApplyBtn>
    </Box>
  );
};

export default Card;
