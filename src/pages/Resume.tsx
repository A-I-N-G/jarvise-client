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

export interface Answer {
  content: string;
  id: number;
  value: string;
  company_position_id: number;
}

const Resume = () => {
  const { companyPositionId } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState<Question[]>();
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>();

  useEffect(() => {
    if (!companyPositionId) return;
    getItems({ companyPositionId: Number(companyPositionId) }).then((res) => {
      res.forEach((lst: Question) => {
        lst["value"] = "";
      });
      setQuestions(res);
    });
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
        // 자소서 문항에 대한 답변 저장해야 함. 어떤 회사직무, 지원자, 자기소개서, 자기소개서항목, 요약본, 
        // const params = {
        //   companyDto: {
        //     id: 1,
        //     name: "현대IT&E",
        //   },
        //   itemList: questions,
        //   keywordList: keywords,
        //   positionDto: {
        //     id: 1,
        //     introduction: jobIntro,
        //     name: jobName,
        //   },
        // };
    
        // await registerEmployment(params);

        if (questions?.length === selectedIdx + 1) {
          alert("제출 완료");
          navigate(`/result/${companyPositionId}`);
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
