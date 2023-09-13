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
import { getCorrectYN } from "../axios/gpt";
import { CreateChatCompletionRequestMessage } from "openai/resources/chat";
import CorrectYN from "../components/CorrectYN";

export interface CorrectYNObj {
  keyword: string;
  yn: string;
  content: string;
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

const initCorrectYNPrompt: CreateChatCompletionRequestMessage[] = [
  {
    role: "system",
    content:
      "당신은 한 기업의 채용 담당자입니다. 당신은 자기소개서를 읽고 각 인재상과의 일치여부(Y/N) 및 이유를 작성해야합니다. 다음은 당신이 속한 기업이 뽑고 싶은 인재상입니다.\n\n1. ACTION:  열정과 자부심을 가지고 끊임없이 도전하는 사람\n2. CHAGNE: 혁신적 사고와 학습을 통해 변화를 주도하는 사람\n3. DEVELOPMENT: 소통하고 협업하며 함께 성장하는 사람",
  },
  {
    role: "user",
    content:
      "현대백화점그룹이 지향하는 4가지 실천가치 중 저와 가장 잘 부합하는 실천가치는 열정이라고 생각합니다. 저는 대학교에서 컴퓨터공학이 아닌 토목공학을 전공했지만 컴퓨터공학에 뒤늦게 흥미를 느꼈습니다. 대학교 졸업 후에 토목공학과 관련된 회사에 취직하였지만 웹 개발에 흥미를 느껴 취업 후에도 혼자 열정적으로 웹 개발을 배워나갔습니다. 그렇게 혼자 웹 개발을 해보면서 느낀 흥미가 진심이라고 생각되어 퇴사를 하고 제대로 웹 개발에 대해 배우고자 했습니다. 그렇게 저는 삼성 청년 SW 아카데미라는 교육 프로그램에 참여하게 되었습니다. 삼성 청년 SW 아카데미에서는 웹 개발 뿐만 아니라 SW 기초 지식 및 알고리즘과 같은 것들도 배울 수 있었습니다. 저는 교육 프로그램이 진행되는 1년 동안 정말 열정적으로 교육에 참가하였습니다. 그 결과 1년의 교육 과정을 마치고 우수 교육생으로 청년 SW 아카데미를 수료할 수 있었습니다. 저의 이런 열정은 꾸준함에서 온다고 생각합니다. 때로는 새로운 것을 배우는 것이 힘들고 지칠 때도 있지만 꾸준하게 교육에 참여하였습니다. 이런 꾸준함이 제가 가진 강점이자 열정을 유지할 수 있었던 이유라고 생각합니다.",
  },
  {
    role: "assistant",
    content:
      "ACTION/Y/자기소개서에서 웹 개발 분야로의 전환 및 삼성 청년 SW 아카데미 참여를 통해 도전적인 결정을 내렸으며, 끊임없이 발전하고자 하는 열정이 드러납니다.\\ CHANGE/Y/자기소개서에서 토목공학에서 웹 개발로의 전환과 삼성 청년 SW 아카데미 참여를 통해 변화를 주도한 모습을 나타냅니다.\\ DEVELOPMENT/N/자기소개서에서 팀과의 협업 경험에 대한 구체적인 언급이 부족합니다.",
  },
  {
    role: "user",
    content:
      "저는 e-commerce 를 운영하고 있는 A기업에서 3개월 간의 인턴 근무 경험이 있습니다. 11번가 많은 팀 중에서 FE 개발 팀에서 인턴 생활을 했습니다. FE 개발 팀은 A기업 PC 및 모바일웹 사이트를 제작 및 유지 보수하는 팀이었습니다. 저는 인턴으로서 FE 개발 팀 뿐만 아니라 A기업 다른 모든 팀에서 쉽게 사용할 수 있는 UI 라이브러리를 제작하는 업무를 맡았습니다. A기업는 B기업에서 제가 지원한 어플리케이션 개발/운영 직무와 많은 관련성이 있을 것이라고 생각합니다. 같은 온라인 쇼핑이라는 주제를 가지고 있기 때문입니다. 저는 A기업 인턴 생활을 하면서 온라인 쇼핑몰에 자주 사용하는 UI 컴포넌트들을 보았습니다. 이런 경험이 제가 입사하였을 때 쇼핑몰 사이트를 제작하는데 많은 도움이 될 것이라고 생각합니다. 뿐만 아니라 쇼핑몰에서 사용자의 로그 데이터를 수집하는 것도 보았습니다. 어느 부분에서 로그를 수집하고 해당 로그를 언제 송출해야 하는지 경험했습니다. 이러한 A기업에서의 인턴 경험 덕분에 제가 빠르게 직무에 적응할 수 있을 것이라고 생각합니다.",
  },
  {
    role: "assistant",
    content:
      "ACTION/Y/자기소개서에서 FE 개발 팀에서의 3개월 인턴 경험과 다른 분야에서의 도전적인 시도가 역량을 보여줍니다.\\ CHANGE/N/자기소개서에서 혁신적 사고와 변화를 주도하는 사례가 나타나지 않습니다.\\ DEVELOPMENT/Y/자기소개서에서 FE 개발 팀과 다른 모든 팀에서의 협업 경험을 언급하여 함께 성장하는 자세를 나타냅니다.",
  },
  {
    role: "user",
    content:
      "저에게는 기존의 전공을 바꿔 개발 공부를 시작했던 것이 인생에서 가장 큰 새로운 변화라고 생각합니다. 저는 대학교에서 컴퓨터공학이 아닌 토목공학을 전공으로 공부했습니다. 하지만 개발자라는 직업에 흥미를 느끼기 시작하고 컴퓨터공학 수업을 듣게 되었습니다. 그리고 토목 관련 회사에 취업을 한 뒤에도 혼자 개발 공부를 계속해왔습니다. 그러다가 개발에 대한 저의 흥미에 확신을 가지고 퇴사를 결심하고 삼성 청년 SW 아카데미 참가하기 위해 공부를 시작하게 되었습니다. 삼성 청년 SW 아카데미에 합격한 이후에 아카데미가 진행되는 1년 동안 정말 열심히 교육에 임하였습니다. 스스로 선택한 변화에 후회를 남기고 싶지 않았습니다. 이러한 저의 마인드는 제가 교육이 진행되는 기간 동안 꾸준하게 학습할 수 있는 몸과 마음을 만들어 주었습니다. 그 덕분에 수많은 전공자들이 있었지만 삼성 청년 SW 아카데미에서 우수 교육생으로 수료할 수 있었습니다. 이런 경험을 토대로 몸과 마음을 가다듬고 꾸준하게 열심히 한다면 모든 할 수 있다는 자신감을 가질 수 있었습니다.",
  },
  {
    role: "assistant",
    content:
      "ACTION/Y/자기소개서에서 새로운 전공으로의 전환 및 삼성 청년 SW 아카데미 참여로 인한 큰 변화를 경험하였으며, 이를 통해 도전과 열정이 드러납니다.\\ CHANGE/Y/자기소개서에서 전공 변경과 퇴사 결정, 그리고 삼성 청년 SW 아카데미 참가 등 혁신적인 사고와 변화를 주도한 경험을 언급하고 있습니다.\\ DEVELOPMENT/Y/자기소개서에서 교육 기간 동안 꾸준한 학습과 성장을 강조하여 소통과 협업하는 데 필요한 능력을 나타냅니다.",
  },
  // {
  //   role: "user",
  //   content:
  //     "현재 우리나라 소비자들의 온라인 쇼핑몰에서의 소비 비중이 많이 증가하였습니다. 현재 온라인 쇼핑몰에서는 사람이 살아가는데 필수적인 3가지 요소인 옷, 음식, 집 중에서 집을 제외한 옷과 음식을 구매하고 있습니다. 소비자들은 예전과 달리 리뷰 및 평점 같은 서비스들로 눈으로 직접 확인하지 않고도 어느 정도 상품의 가치를 판단할 수 있는 안목을 가지고 있습니다. 그럼에도 불구하고 여전히 실제 상품을 확인하고 싶다는 니즈는 존재합니다. 그리고 이런 니즈는 최근에 코로나가 잠잠해지면서 증가하게 되었습니다. 이러한 상황에서 온라인 쇼핑몰 뿐만 아니라 오프라인 쇼핑으로서도 국내 최고의 위치에 있는 현대백화점그룹의 경쟁력은 매우 높다고 생각합니다. 뿐만 아니라 다양한 현대백화점그룹 계열사의 쇼핑몰을 개발할 수 있다면 다양한 데이터를 접할 수 있습니다. 이런 다양한 데이터는 제가 개발자로서 성장하는데 많은 도움이 된다고 생각합니다.\n제가 현대IT&E에 입사하게 된다면 지금까지 개발자의 길을 걸어온 것 처럼 꾸준하고 열심히 성장하겠습니다. 그리고 저의 성장과 더불어 사용자가 사용하기 편리한 웹 및 모바일을 만들 수 있도록 노력하겠습니다.",
  // },
  // {
  //   role: "assistant",
  //   content:
  //     "ACTION/Y/자기소개서에서 현재의 코로나 시대와 온라인 쇼핑 트렌드를 반영하여 쇼핑 관련된 주제를 다루고 있으며, 개발자로서 데이터를 통한 성장과 사용자 경험 개선에 대한 열정이 드러납니다., CHANGE/N/자기소개서에서 혁신적 사고와 변화를 주도한 경험을 구체적으로 언급하지는 않았습니다., DEVELOPMENT/Y/자기소개서에서 개발자로서의 성장과 사용자 중심의 웹 및 모바일 애플리케이션 개발에 대한 열정을 나타냅니다.",
  // },
  // {
  //   role: "user",
  //   content:
  //     "[기우제는 언제나 성공한다]\n목표달성을 위하여 열정적으로 학업에 매달린 경험이 있습니다. 전공 공부에 집중하는 것이 우선적으로 중요하다는 것을 깨달은 저는 우선 학과 수석이었던 친구에게 조언을 구했습니다. 그 친구는 아리조나 사막 인디언들의 이야기를 들려주었습니다. 인디언들의 기우제는 항상 성공한다고 합니다. 왜냐하면, 비가 올 때까지 기우제를 지내기 때문입니다. 특별한 공부법이라기보다 '될 때까지 한다'는 뚜렷한 목표의식의 중요성을 배웠습니다. 따라서 '목표'를 정하는 것부터 시작했습니다. 저는 당시 남은 4학기 동안 '성적 장학금'을 받는 것을 목표로 설정했습니다.\n혼자 공부하는 것이 익숙했던 저에게 한계가 느껴졌습니다. 그래서 친구들과 정기적인 스터디를 하기 시작했습니다. 선의의 경쟁 속에서 쉽게 다른 유혹들을 뿌리칠 수 있었고 서로를 독려했습니다. 결과적으로 18년도 2학기와 19년도 1학기에는 성적 장학금을 받을 수 있었습니다. 19년도 2학기에는 아쉽게도 장학금은 놓쳤지만 세 학기 연속 4.0 이상이라는 소기의 목적을 달성할 수 있었습니다. 뚜렷한 목표의식과 협동심은 곧 열정으로 이어지며 이는 결과로 보상받는다는 것을 깨달을 수 있었습니다.",
  // },
  // {
  //   role: "assistant",
  //   content:
  //     "ACTION/Y/자기소개서에서 목표 설정과 열정적인 학업에 대한 경험을 기술하여, 열정과 목표 달성 능력을 나타내고 있습니다., CHANGE/N/자기소개서에서 혁신적 사고와 변화를 주도한 경험이 나타나지 않습니다., DEVELOPMENT/Y/자기소개서에서 친구들과의 협력적인 스터디 그룹을 통해 협동심을 발휘한 경험을 언급하여 함께 성장하는 자세를 나타내고 있습니다.",
  // },
  // {
  //   role: "user",
  //   content:
  //     "[끊임없이 역량을 강화하는 개발자]\n개발 역량을 강화하고 도태되지 않는 개발자로 성장하기 위해 다음과 같은 경험을 쌓았습니다. 첫째, 4번의 웹 개발 프로젝트에 참여했습니다. 막학기의 종합 설계 과목에서 HTML, CSS, Javascript를 이용한 프론트엔드 개발을 진행하였고, 웹개발자 양성과정에 참여하여 Mybatis, Oracle, Git, JSP 등의 기술을 익히며 2회의 프로젝트를 진행했습니다. 또한, 인턴으로 근무하며 Typescript기반의 React, MSA기반의 Spring Boot를 활용한 사이드 프로젝트에 풀스택 개발자로 참여하며 실무경험까지 두루 갖출 수 있었습니다. 이러한 경험을 바탕으로 개발 역량을 꾸준히 향상해왔습니다.\n또한, IT산업은 어떤 산업 분야보다 변화의 폭이 넓기에 '끊임없는 학습'이 필요하다는 것을 인지하고 이에 대처할 수 있는 역량을 갖추고자 했습니다. '정보처리기사'를 취득하여 네트워크, 컴퓨터과학 등에 대한 지식을 쌓았습니다. 또한, 자료구조와 알고리즘을 공부하기 위해  스터디를 적극적으로 활용했습니다. 스터디원들과 코드 리뷰를 통해 효율적인 코드를 작성하고자 지속적으로 노력하고 있습니다.",
  // },
  // {
  //   role: "assistant",
  //   content:
  //     "ACTION/Y/자기소개서에서 웹 개발 프로젝트 및 실무 경험을 통해 개발 역량을 강화하고 끊임없이 도전하는 모습을 나타내고 있습니다., CHANGE/Y/자기소개서에서 정보처리기사 취득 및 자료구조와 알고리즘 스터디를 통해 변화를 주도하는 학습 경험이 강조되었습니다., DEVELOPMENT/N/자기소개서에서 협업 및 팀 프로젝트에 대한 구체적인 언급이 부족합니다.",
  // },
  // {
  //   role: "user",
  //   content:
  //     "[팀원들을 설득하는 방법]\n프로젝트 진행 중이던 팀에서는 한 가지 문제가 있었습니다. 개발 branch와 운영 branch가 동일한 master branch를 바라보고 있다는 것이었습니다. 이 때문에 운영 서버에 충분히 테스트를 거치지 않은 코드가 반영되거나, 운영 환경과 개발 환경이 달라 오류가 나는 등의 문제가 발생했습니다.\n이를 해결하기 위한 다양한 의견이 나왔지만 대부분의 의견은 다른 부작용을 동반했습니다. 저는 문득 Git-Flow'를 떠올렸고 이에 대한 세미나를 진행하게 되었습니다. Git-Flow를 적용하는 방법론과 실제로 개발과 운영을 분리하여 commit을 만들고, 예상되는 충돌을 발생시켜 해결하는 방법, master브랜치에는 cherry-pick으로 원하는 commit만을 반영시키는 방법 등 충분한 예시를 들어 이에 관해 프레젠테이션을 준비했습니다.\n이를 통해 개발자와 PM 모두에게 동의를 받을 수 있었고 이것이 채택되어 branch 관리 전략으로 사용될 수 있었습니다. 이후 branch 전략으로 인한 운영 상의 문제는 사라지게 되었고, 저는 근거와 예시를 통해 상대방을 설득하는 방법을 배울 수 있었습니다.",
  // },
  // {
  //   role: "assistant",
  //   content:
  //     "ACTION/Y/자기소개서에서 문제 상황을 해결하기 위해 주도적으로 세미나를 진행하고 팀원들을 설득하여 문제를 해결한 사례를 나타내고 있습니다., CHANGE/N/자기소개서에서 혁신적 사고나 변화를 주도한 경험에 대한 언급이 부족합니다., DEVELOPMENT/Y/자기소개서에서 세미나와 프레젠테이션을 통해 상대방을 설득하는 능력을 강조하고 있습니다.",
  // },
  // {
  //   role: "user",
  //   content:
  //     "[고객과의 접점]\n개발자로서의 저는 무엇보다도 고객과의 직접적인 접촉을 하고싶습니다. 인턴 과정을 거치며 진행한 프로젝트에서는 기획부터 개발, 테스트까지 개발의 전반적인 프로세스를 익힐 수 있었습니다. 이 중에서 가장 즐거웠던 경험은 '타인과의 소통'이었습니다. 기획자와의 화면 설계 리뷰, 테스트 과정을 통한 DB수정이나 코드 개선 등의 경험이 저에게는 가장 큰 즐거움으로 다가왔고, 단순히 개발 이외에도 개발자가 챙겨가야 할 중요한 부분임을 인지하게 되었습니다. 이런 과정에서 저는 최대한 많은 사용자가 사용하고, 이들이 전달하는 피드백을 받아 개선하는 과정을 통해 성장할 수 있는 기업으로 현대IT&E에 지원했습니다.\n입사 후 빠르게 실무 프로세스를 이해하고, 프로젝트를 통해 실무 능력을 강화하겠습니다. 또한, DBMS 운용능력을 통한 효율적인 데이터 관리를 위해 SQLD 자격증을 취득하고, 현업에서 사용하는 쿼리를 중심으로 공부하겠습니다. 이를 바탕으로, 고객사 최적의 시스템 구현을 통해 고객 가치를 창출하겠습니다. 나아가 ‘Application Specialist’로 성장하며, 현대IT&E가 글로벌 IT 그룹으로 도약하는 데 이바지하겠습니다.",
  // },
  // {
  //   role: "assistant",
  //   content:
  //     "ACTION/Y/자기소개서에서 인턴 경험 중 기획자 및 사용자와의 소통을 강조하여 고객과의 직접적인 접촉을 강조하고 있습니다., CHANGE/Y/자기소개서에서 실무 능력을 강화하기 위해 SQLD 자격증 취득 및 데이터 관리 역량 향상에 대한 명확한 계획을 언급하고 있습니다., DEVELOPMENT/N/자기소개서에서 현대IT&E가 글로벌 IT 그룹으로 도약하는 방법이나 전략에 대한 언급이 부족합니다.",
  // },
  // {
  //   role: "user",
  //   content:
  //     "<사람과 자료로 소통한 사용자 영화 캐릭터 웹 프로젝트>\n사용자 유사 영화 캐릭터 웹 프로젝트에 참여한 경험이 있습니다. 백엔드 개발과 팀장을 맡았고 Python, Flask, MySQL, SQLAlchemy, Azure을 사용했습니다. 이 프로젝트에서 매일 진행 기록을 남기고 자료 기반으로 팀원들과 소통하고자 했습니다.\n원활한 협업을 위해 3가지 방법을 도입했습니다. 첫째, 프로젝트 목표를 공유하고, ‘존중과 최선’이라는 팀의 모토를 정했습니다. 둘째, 스크럼 미팅록과 일일 보고를 매일 기록하였습니다. 셋째, 편한 의견 제시를 위해 익명 건의 채널을 만들었습니다.\n개발 시 DB 설계 정규화와 중개 테이블 관련 조사한 자료를 기반으로 초기엔 6개이던 엔티티를 11개로 분해했습니다. 배포 후 로그인이 되지 않는 문제에 20여개의 관련 게시물과 2명의 현업자 코드 리뷰를 통해 프론트엔드 쿠키 설정 문제임을 파악 후 문제를 해결했습니다.\n배포 후 피드백 결과 90퍼센트가 서비스에 만족했다고 답했습니다. 팀원 익명 설문 결과 협업 만족도 100퍼센트를 얻었습니다. 이렇게 사람과 자료로 소통하는 자세는 저의 강점이며 이를 현대 IT&E에서도 십분 활용하겠습니다.",
  // },
  // {
  //   role: "assistant",
  //   content:
  //     "ACTION/Y/프로젝트 팀장으로서 프로젝트 목표를 공유하고 팀원 간의 협업을 원활히 이끈 경험이 돋보입니다., CHANGE/Y/스크럼 미팅과 일일 보고를 통해 팀 내 의사소통과 기록을 관리하여 프로젝트 진행을 효율화했습니다., DEVELOPMENT/Y/DB 설계 정규화와 관련 자료 조사를 통해 엔티티 분해와 배포 후 발생한 문제 해결에 적극적으로 기여하였습니다.",
  // },
  // {
  //   role: "user",
  //   content:
  //     "[자료구조와 DB 스키마 변경으로 실행 시간 260배 단축]\n영상 키워드 추출 AI 프로젝트에 참여한 경험이 있습니다. 백엔드 개발을 맡았고 기술은 Python, Django, MySQL, Azure를 사용했습니다. 당시 실행 속도가 느려 동시 접속자가 여러 명일 때 504 타임아웃 에러가 발생하는 문제가 있었습니다. 코드 리뷰와 회의를 통해 원인을 두 가지로 규정했습니다. 먼저 사용자가 다르면, 같은 영상 분석을 요청해도 다시 분석하는 것이 문제였습니다. 이는 DB 정규화로 동영상 테이블을 2개로 분해하여 중복 저장을 최소화시켜 해결했습니다. 두 번째로 AI 코드에 배열과 중첩 반복문이 많았던 점을 파악했습니다. 불필요한 반복문을 줄였고 배열을 딕셔너리나 집합으로 변경해 데이터 검색 시간을 줄였습니다. 15명 동시 접속과 16분 길이의 영상 분석 상황을 가정하여 로드 테스트를 진행했습니다. 최대 실행 시간이 26초에서 24초로 감소했고, 중복 데이터의 경우 0.9초로 260배 속도가 향상된 것을 확인했습니다.\n개발하며 더 나은 방식을 고민하는 것과 해당 프로젝트 AI 코드 수정처럼 기존 업무가 아니라도 자원하여 경험을 확장하려는 것이 저의 차별점입니다.",
  // },
  // {
  //   role: "assistant",
  //   content:
  //     "ACTION/Y/프로젝트에서 실행 시간을 260배 단축한 경험이 강조됩니다., CHANGE/Y/DB 정규화와 데이터 구조 최적화를 통해 성능 문제를 해결하였으며, 기술적으로 더 나은 방법을 모색하는 역량을 보여줍니다., DEVELOPMENT/Y/개발 업무 이외의 부분에서도 자원하고 경험을 확장하려는 의지를 나타냈습니다.",
  // },
  // {
  //   role: "user",
  //   content:
  //     "[3가지 게임 개발로 느낀 효율성, 확장성, 클린 코드의 중요성]\n셈웨어라는 회사에서 4개월간 인턴으로 초등 수학 게임 프로토타입 개발을 담당했습니다. 게임 개발이라는 분야, Unity, C#이 모두 처음이었기 때문에 이 업무는 저에게 큰 변화이자 도전이었습니다. \n두 권의 Unity 책과 20여개의 온라인 강의로 학습하고 개인 Notion과 GitHub에 내용을 정리했습니다. 업무에 투입되어 게임 기획부터 UI 및 기능 설계와 구현, 리팩토링을 진행했습니다. 개발 시 레퍼런스와 오픈소스, 인터넷 자료를 10개 이상 찾아보고 적용했습니다. 싱글톤 패턴을 활용한 개발 방식으로 게임 오브젝트 관리를 쉽게 하며 올바른 디자인 패턴의 중요성을 느꼈습니다. 비슷한 역할을 하는 오브젝트는 다형성과 상속성을 활용하여 코드의 중복을 60퍼센트 줄였습니다. 업무를 진행할수록 효율성, 확장성, 클린 코드 등 소프트웨어 개발에서 중요한 점은 어떤 분야든 비슷함을 배웠습니다. 4개월간 2D와 3D 게임 프로토타입 3개를 완성하여 인턴 중 가장 높은 성과를 보였다고 평가받았습니다.",
  // },
  // {
  //   role: "assistant",
  //   content:
  //     "ACTION/Y/개발 경험을 통해 효율성, 확장성, 클린 코드의 중요성을 배웠으며, 실제 프로젝트에서 이를 적용하여 성과를 얻었습니다., CHANGE/Y/레퍼런스와 디자인 패턴 활용, 코드 중복 최소화 등을 통해 개발 역량을 향상시켰습니다., DEVELOPMENT/Y/게임 개발 경험을 통해 소프트웨어 개발 원칙을 배우고 실무에 적용하여 성과를 도출한 경험을 강조했습니다.",
  // },
  // {
  //   role: "user",
  //   content:
  //     "학부에서부터 지금까지 콘솔 애플리케이션 개발, 프론트엔드 개발, 백엔드 개발, 안드로이드 앱 개발, 게임 개발 등 여러 가지 분야를 도전하며 저에게 맞는 직무를 탐색했습니다. 그중 요청을 안정적으로 처리하는 백엔드가 가장 재미있게 느껴져 해당 분야에 대해 더욱 전문성을 쌓고 싶습니다. 더 나아가 다양한 분야에 도전하며 여러 방면에서 경험을 쌓아 테크 리더로 성장하고 싶습니다.\n우연한 기회로 더현대서울에서 무인매장 언커먼스토어를 체험할 수 있었습니다. 신기한 경험이라 찾아보니 현대 IT&E와 AWS의 합작인 것을 알게 되었습니다. 그때 현대 IT&E에서 다양한 신기술을 접목한 도전을 하는 것을 알게 되었습니다. 계열사 온라인 쇼핑몰 개발로 백엔드 역량 향상 뿐 아니라 여러 신규 프로젝트에 참여하며 다채로운 역량을 쌓을 수 있을 것이라고 생각하여 현대 IT&E 입사를 꿈꾸게 되었습니다.",
  // },
  // {
  //   role: "assistant",
  //   content:
  //     "ACTION/Y/지원자는 학부 시절부터 다양한 개발 분야에 도전하며 자신의 열정과 자부심을 보여주었습니다. 백엔드 개발 분야에서의 전문성을 쌓기 위한 끊임없는 도전을 표현하였으며, 이러한 열정과 자부심이 우리 기업의 인재상과 일치합니다.,CHANGE/Y/지원자는 다양한 개발 분야를 경험하며 혁신적 사고와 학습을 강조하였습니다. 무인매장 체험을 통해 현대 IT&E와 AWS의 혁신적인 프로젝트에 흥미를 느끼고, 이를 통해 변화를 주도하고자 합니다.,DEVELOPMENT/Y/자기소개서에서 지원자는 다양한 개발 프로젝트에서 팀원들과의 협업과 익명 건의 채널을 통한 의견 수렴을 강조하였습니다. 이는 소통하고 협업하여 함께 성장하려는 의지를 나타냅니다. 현대 IT&E에서의 다양한 프로젝트 참여 의지와 잠재력을 보여줍니다.",
  // },
];

const Result = () => {
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(true);
  const [correctYNPrompt, setCorrectYNPrompt] = useState(initCorrectYNPrompt);
  const [correctYN, setCorrectYN] = useState<CorrectYNObj[]>([]);

  useEffect(() => {
    if (!location.state.content) {
      alert("자기소개서를 다시 작성해주세요.");
      return;
    }
    getResults(location.state.content);
  }, []);

  const getResults = async (content: string) => {
    setIsLoading(true);
    // const res = await getCorrectYN([
    //   ...correctYNPrompt,
    //   { role: "user", content },
    // ]);
    // const {
    //   message: { content: result },
    // } = res.choices[0];
    const result = {
      id: "chatcmpl-7yJL3biZFkkX7ddMueAoihKEQgikV",
      object: "chat.completion",
      created: 1694608373,
      model: "gpt-3.5-turbo-0613",
      choices: [
        {
          index: 0,
          message: {
            role: "assistant",
            content:
              "ACTION/Y/자기소개서에서 전공 공부에 열정적으로 몰입하고 성적 장학금을 받기 위해 뚜렷한 목표를 설정하였으며, 목표에 도달하기 위해 협동심과 스터디를 통한 협업을 이끌어냈습니다.\\ CHANGE/N/자기소개서에서 혁신적 사고와 학습을 통해 변화를 주도한 사례가 나타나지 않습니다.\\ DEVELOPMENT/Y/자기소개서에서 스터디를 통해 협동심을 기르고 성장하는 경험을 언급하여 함께 성장하는 자세를 나타냅니다.",
          },
          finish_reason: "stop",
        },
      ],
      usage: {
        prompt_tokens: 2907,
        completion_tokens: 200,
        total_tokens: 3107,
      },
    };
    const splited = result.choices[0].message.content.split("\\");
    const temp: CorrectYNObj[] = [];
    splited.forEach((res) => {
      const [keyword, yn, content] = res.split("/");
      temp.push({ keyword, yn, content });
    });
    setCorrectYN(temp);
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
            <PersonalityResult />
            <QuestionResult />
            <ETCResult />
          </ContentDiv>
        </ContentBox>
      )}
    </Wrapper>
  );
};

export default Result;
