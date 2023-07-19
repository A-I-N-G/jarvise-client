import styled from "styled-components";
import Wrapper from "../components/Wrapper";
import HireCard from "../components/HireCard";
import { useState, useEffect } from "react";
import { getEmployment } from "../axios/recruit";
import { Link } from "react-router-dom";

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

const CenterBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledLink = styled(Link)`
  padding: 15px 30px;
  text-decoration: none;
  background-color: #0acf97;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

interface Employment {
  companPositionId: number;
  name: string;
  keywordList: string[];
  introduction: string;
}

const Hire = () => {
  const [employments, setEmployments] = useState<Employment[]>([]);

  useEffect(() => {
    getEmployment().then((res) => {
      setEmployments(res);
    });
  }, []);

  return (
    <Wrapper>
      <ContentBox>
        {employments.length ? (
          employments.map(
            ({ companPositionId, name, keywordList, introduction }) => (
              <HireCard
                id={companPositionId}
                title={name}
                keyword={keywordList.join(", ")}
                intro={introduction}
              />
            )
          )
        ) : (
          <CenterBox>
            <StyledLink to="/register">채용 공고 등록하기</StyledLink>
          </CenterBox>
        )}
      </ContentBox>
    </Wrapper>
  );
};

export default Hire;
