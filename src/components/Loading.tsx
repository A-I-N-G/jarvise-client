import styled from "styled-components";

const CenterDiv = styled.div`
  width: 150px;
  height: 150px;
  position: absolute;
  border: 16px solid #919191;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg) translate(-50%, -50%);
    }
    100% {
      -webkit-transform: rotate(360deg) translate(-50%, -50%);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg) translate(-50%, -50%);
      transform-origin: 0% 0%;
    }
    100% {
      transform: rotate(360deg) translate(-50%, -50%);
      transform-origin: 0% 0%;
    }
  }
`;

const Loading = () => {
  return <CenterDiv></CenterDiv>;
};

export default Loading;
