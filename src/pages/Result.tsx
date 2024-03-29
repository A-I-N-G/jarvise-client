import Wrapper from "../components/Wrapper";
import styled from "styled-components";
import GraphResult from "../components/GraphResult";
import KeyWordResult from "../components/KeyWordResult";
import PersonalityResult from "../components/PersonalityResult";
import QuestionResult from "../components/QuestionResult";
import ETCResult from "../components/ETCResult";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loading from "../components/Loading";
import { getCorrectYN, getQuestion, getStrengthNWeakness } from "../axios/gpt";
import { CreateChatCompletionRequestMessage } from "openai/resources/chat";
import CorrectYN from "../components/CorrectYN";

export interface CorrectYNObj {
  keyword: string;
  yn: string;
  content: string;
}

export interface StrengthNWeakness {
  strength: string[],
  weakness: string[]
}

export interface Questions {
  "question1" : string;
  "question2" : string;
  "question3" : string; 
}

const ContentBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
  height: 90%;
  top: 5%;
  left: 5%;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const ContentDiv = styled.div`
  width: 100%;
  height: 48%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

const Result = () => {
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(true);
  const [correctYN, setCorrectYN] = useState<CorrectYNObj[]>([]);
  const [strengthNWeakness, setStrengthNWeakness] = useState<StrengthNWeakness>({strength: [], weakness: []});
  const [questions, setQuestions] = useState<Questions>({question1:"", question2:"", question3:""});

  useEffect(() => {
    if (!location.state.content) {
      alert("자기소개서를 다시 작성해주세요.");
      return;
    }
    getResults(location.state.content);
  }, []);

  const getResults = async (content: string) => {
    setIsLoading(true);
    // 일치여부
    const respCorrectYN = await getCorrectYN(
      { role: "user", content },
    );
    // const respCorrectYN = {
    //   id: "chatcmpl-7yJL3biZFkkX7ddMueAoihKEQgikV",
    //   object: "chat.completion",
    //   created: 1694608373,
    //   model: "gpt-3.5-turbo-0613",
    //   choices: [
    //     {
    //       index: 0,
    //       message: {
    //         role: "assistant",
    //         content:
    //           "ACTION/Y/자기소개서에서 전공 공부에 열정적으로 몰입하고 성적 장학금을 받기 위해 뚜렷한 목표를 설정하였으며, 목표에 도달하기 위해 협동심과 스터디를 통한 협업을 이끌어냈습니다.\\ CHANGE/N/자기소개서에서 혁신적 사고와 학습을 통해 변화를 주도한 사례가 나타나지 않습니다.\\ DEVELOPMENT/Y/자기소개서에서 스터디를 통해 협동심을 기르고 성장하는 경험을 언급하여 함께 성장하는 자세를 나타냅니다.",
    //       },
    //       finish_reason: "stop",
    //     },
    //   ],
    //   usage: {
    //     prompt_tokens: 2907,
    //     completion_tokens: 200,
    //     total_tokens: 3107,
    //   },
    // };
    const splited = respCorrectYN?.choices[0]?.message?.content?.split("\\");
    const temp: CorrectYNObj[] = [];
    splited!.forEach((res) => {
      const [keyword, yn, content] = res.split("/");
      temp.push({ keyword, yn, content });
    });
    setCorrectYN(temp);

    // 장점 단점
    const respStrengthNWeakness = await getStrengthNWeakness({role:"user", content})
    // const respStrengthNWeakness = {
    //   "id": "chatcmpl-7zbGbSOoYhbFZVD76s6bj7eBym8Vu",
    //   "object": "chat.completion",
    //   "created": 1694915617,
    //   "model": "gpt-3.5-turbo-0613",
    //   "choices": [
    //     {
    //       "index": 0,
    //       "message": {
    //         "role": "assistant",
    //         "content": "장점: 온라인 쇼핑 경험, 고객의 니즈 이해, 현대백화점그룹 경쟁력, 다양한 데이터 접근, 꾸준함, 열정, 사용자 중심 개발 \\ 단점: 없음"
    //       },
    //       "finish_reason": "stop"
    //     }
    //   ],
    //   "usage": {
    //     "prompt_tokens": 2385,
    //     "completion_tokens": 84,
    //     "total_tokens": 2469
    //   }
    // }
    const splitedSNW = respStrengthNWeakness?.choices[0]?.message?.content?.split('\\');
    const tempSNW: StrengthNWeakness = {strength: [], weakness: []};
    splitedSNW?.forEach((res) => {
      const [title, contents] = res.split(":")
      const temp = contents.split(",");
      const _final = temp.map(t => t.trim());
      if (title.includes("장점")) tempSNW.strength = _final
      else tempSNW.weakness = _final
    })
    setStrengthNWeakness(tempSNW);
    
    // 질문
    const respQuestion = await getQuestion({role:"user", content})
    // const respQuestion = {
    //   "id": "chatcmpl-7zbGbSOoYhbFZVD76s6bj7eBym8Vu",
    //   "object": "chat.completion",
    //   "created": 1694915617,
    //   "model": "gpt-3.5-turbo-0613",
    //   "choices": [
    //     {
    //       "index": 0,
    //       "message": {
    //         "role": "assistant",
    //         "content": "1. 고객과의 소통 및 피드백을 받아 개선하는 과정에서의 경험을 바탕으로, 개발자로서 어떤 방식으로 사용자 피드백을 수집하고 이를 개선하기 위해 어떤 노력을 하고 싶으신가요?\n2. DBMS 운용능력과 SQLD 자격증을 통해 데이터 관리를 강화하고자 하시는데, 실무에서 어떤 종류의 데이터 관리 작업을 주로 수행하고 싶으신가요?\n3. 'Application Specialist'로 성장하기 위해 어떤 분야에서 전문성을 향상시키고, 현대IT&E가 글로벌 IT 그룹으로 도약하는 데 어떻게 이바지하고 싶으신가요?"
    //       },
    //       "finish_reason": "stop"
    //     }
    //   ],
    //   "usage": {
    //     "prompt_tokens": 2385,
    //     "completion_tokens": 84,
    //     "total_tokens": 2469
    //   }
    // }
    const splitedQuestion = respQuestion?.choices[0]?.message?.content?.split("\n");
    const tempQuestion: Questions = {question1:"", question2: "", question3:""};
    splitedQuestion?.forEach((res) => {
      const [num, content] = res.split(".");
      const result = content.trim();
      if (num.includes("1")) tempQuestion.question1 = result
      else if (num.includes("2")) tempQuestion.question2 = result
      else if (num.includes("3")) tempQuestion.question3 = result
    })
    setQuestions(tempQuestion);
    setIsLoading(false);
  };

  return (
    <Wrapper>
      {isLoading ? (
        <Loading />
      ) : (
        <ContentBox>
          <ContentDiv>
            {/* <CorrectYN correctYN={correctYN} /> */}
            <KeyWordResult correctYN={correctYN} />
          </ContentDiv>
          <ContentDiv>
            <PersonalityResult strengthNWeakness={strengthNWeakness} />
            <QuestionResult questions={questions} />
            <ETCResult />
          </ContentDiv>
        </ContentBox>
      )}
    </Wrapper>
  );
};

export default Result;
