import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  PolarRadiusAxis,
  LabelList,
} from "recharts";
import styled from "styled-components";

const ContentDiv = styled.div`
  width: 32%;
  height: 100%;
  background-color: #fff;
  border-radius: 30px;
  padding: 30px 50px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const GraphResult = () => {
  const data = [
    { keyword: "열정", key: 10 },
    { keyword: "끈기", key: 8 },
    { keyword: "협동력", key: 7 },
    { keyword: "도전", key: 9 },
    { keyword: "창의", key: 9 },
  ];

  return (
    <ContentDiv>
      <RadarChart data={data} width={300} height={300}>
        <PolarGrid />
        <PolarRadiusAxis angle={30} domain={[0, 10]} />
        <PolarAngleAxis dataKey="keyword" />
        <Radar
          name="점수"
          dataKey="key"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        >
          <LabelList dataKey="key" />
        </Radar>
      </RadarChart>
    </ContentDiv>
  );
};

export default GraphResult;
