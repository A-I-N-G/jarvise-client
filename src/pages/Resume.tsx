import { MouseEvent, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getItems } from "../axios/recruit";
import ResumeBox from "../components/ResumeBox";
import Wrapper from "../components/Wrapper";

export interface Question {
  content: string;
  id: number;
  value: string;
}

const Resume = () => {
  const { companyPositionId } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState<Question[]>();
  const [selectedIdx, setSelectedIdx] = useState(0);

  useEffect(() => {
    // if (!companyPositionId) return;
    // getItems({ companyPositionId: Number(companyPositionId) }).then((res) => {
    //   res.forEach((lst: Question) => {
    //     lst["value"] = "";
    //   });
    //   setQuestions(res);
    // });
    const res = [
      {
        content: "자기소개서를 작성해주세요.",
        id: 1,
        value: "",
      },
    ];
    setQuestions(res);
  }, [companyPositionId]);

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
        if (questions?.length === selectedIdx + 1) {
          alert("제출 완료");
          navigate(`/result`, { state: { content: questions[0].value } });
        } else setSelectedIdx((prev) => prev + 1);
        break;
    }
  };

  return (
    <Wrapper>
      {questions?.map(({ content, id, value }, idx) => {
        if (idx !== selectedIdx) return null;
        return (
          <ResumeBox
            title={content}
            id={id}
            idx={idx}
            value={value}
            selectedIdx={selectedIdx}
            onClick={onClick}
            totalCnt={questions.length}
            setQuestions={setQuestions}
          />
        );
      })}
    </Wrapper>
  );
};

export default Resume;
