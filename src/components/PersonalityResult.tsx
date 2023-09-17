import styled from "styled-components";
import { StrengthNWeakness } from "../pages/Result";

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

interface PersonalityResultProps {
  strengthNWeakness: StrengthNWeakness
}

const PersonalityResult = ({strengthNWeakness}:PersonalityResultProps) => {
  return (
    <ContentDiv>
      <ContentBox>
        <Title>🍀 강점</Title>
        <ContentWrapper>
          {strengthNWeakness.strength.map((word) => {
            return (<ContentStrength>
              {word}
            </ContentStrength>)
          })}
        </ContentWrapper>
      </ContentBox>
      <ContentBox>
        <Title>🚨 단점</Title>
        <ContentWrapper>
          {strengthNWeakness.weakness.map((word) => {
            return (<ContentWeakness>
              {word}
            </ContentWeakness>)
          })}
        </ContentWrapper>
      </ContentBox>
    </ContentDiv>
  );
};

export default PersonalityResult;
