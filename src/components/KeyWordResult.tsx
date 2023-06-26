import styled from "styled-components";

const ContentDiv = styled.div`
  width: 66%;
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

const KeyWordResult = () => {
  return <ContentDiv>KeyWordResult</ContentDiv>;
};

export default KeyWordResult;
