import styled from "styled-components";
import Wrapper from "../components/Wrapper";
import HireCard from "../components/HireCard";
import { useState, useEffect } from "react";
import { getEmployment } from "../axios/recruit";

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
        {employments.map(
          ({ companPositionId, name, keywordList, introduction }) => (
            <HireCard
              id={companPositionId}
              title={name}
              keyword={keywordList.join(", ")}
              intro={introduction}
            />
          )
        )}
      </ContentBox>
    </Wrapper>
  );
};

export default Hire;
