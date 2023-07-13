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
  id: number;
  title: string;
  keyword: string[];
  intro: string;
}

const Hire = () => {
  const [employments, setEmployments] = useState<Employment[]>([
    {
      id: 1,
      title: "직무명",
      keyword: ["키워드1", "키워드2"],
      intro: "직무소개",
    },
  ]);

  useEffect(() => {
    // getEmployment().then((res) => {
    //   console.log(res);
    // });
  }, []);

  return (
    <Wrapper>
      <ContentBox>
        {employments.map(({ id, title, keyword, intro }) => (
          <HireCard
            id={id}
            title={title}
            keyword={keyword.join(", ")}
            intro={intro}
          />
        ))}
      </ContentBox>
    </Wrapper>
  );
};

export default Hire;
