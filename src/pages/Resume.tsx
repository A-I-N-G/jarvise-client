import { MouseEvent, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ResumeBox from "../components/ResumeBox";
import Wrapper from "../components/Wrapper";

const mock = [
  {
    title:
      "현대백화점그룹이 지향하는 4가지 실천가치(열정/소통/창의/파트너십 중 택1)와 부합하는 본인의 강점과 경험을 기술하여 주십시오.",
    id: 1,
  },
  {
    title:
      "본인이 지원하는 직무에 있어 다른 지원자와는 차별화된 역량 및 그와 관련된 경험 혹은 경력을 기술하여 주십시오.",
    id: 2,
  },
  {
    title:
      "기존과 다른 새로운 변화를 시도했던 경험과 그를 통해 배운 점이 무엇인지 기술하여 주십시오.",
    id: 3,
  },
  { title: "당사 지원동기와 입사 후 포부를 기술하여 주십시오.", id: 4 },
];

const Resume = () => {
  const { id } = useParams();

  const [selectedIdx, setSelectedIdx] = useState(0);

  useEffect(() => {
    // itemList 가져오는 request
  }, []);

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = e;
    switch (name) {
      case "prev":
        if (selectedIdx === 0) alert("첫 번째 질문입니다.");
        else setSelectedIdx((prev) => prev - 1);
        break;
      case "next":
        if (mock.length === selectedIdx + 1) alert("제출 완료");
        else setSelectedIdx((prev) => prev + 1);
        break;
    }
  };

  return (
    <Wrapper>
      {mock.map(({ title, id }, idx) => {
        if (idx !== selectedIdx) return null;
        return (
          <ResumeBox
            title={title}
            id={id}
            selectedIdx={selectedIdx}
            onClick={onClick}
            totalCnt={mock.length}
          />
        );
      })}
    </Wrapper>
  );
};

export default Resume;
