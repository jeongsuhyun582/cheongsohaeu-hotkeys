import React, { useState } from 'react';

const mappings = [
  {
    key: 'F1',
    text: `❤️청소해유만의 약속♥️

🙋‍♂ 숨고 최초! 30일 무상 AS 보장
  청소 후 문제가 생기면 30일 내 언제든 사후처리 도와드립니다.

🙋‍♀ 하청·외주 없는 100% 본사 직영 운영
  🪪 청소관리사 자격증 보유 팀장님들로만 배정됩니다.

🙋 청결한 도구 사용 원칙!
  청소 구역별 전용 타올 사용 / 2회 사용 후 폐기 처리

🧏‍♂ 작업 완료 후 편백수원액(15만원) 연무 서비스 제공
  새집·헌집증후군 완화에 효과 있는 천연 향균 솔루션!

🧏‍♀ 수납장·붙박이장·걸레받이·드레스룸.전등갓.배수구 완전 탈거 청소
  탈거 가능한 부위는 전부 분리해 속까지 꼼꼼히 청소합니다.

🧏 독일 친환경 브랜드 "키엘" 제품 사용
  영유아나 반려동물이 있는 공간도 안심하세요 🌱

🙇‍♀️대표님도 직접현장투입하는 정직한업체`
  },
  {
    key: 'F2',
    text: `⭐ 청소해유 청소 진행 구역 안내 ⭐

🏡 주방

후드/후드필터, 가스렌지 기름 및 찌든 때 제거

상·하부 수납장 전부 탈거 후 내부까지 꼼꼼 청소

걸레받이도 탈거 후 깨끗하게!

🏡 화장실

천장, 벽, 바닥, 환풍기, 세면대, 변기, 배수구, 욕조, 유리 파티션 등 전체 클린업

🏡 세대 내부 전체

내부 창문, 창틀,샷시, 벽, 바닥, 천장, 몰딩, 걸레받이,현관문(안쪽),콘센트까지 꼼꼼하게

※ 방충망은 현장에서 상태 확인 후, 훼손 우려 시 작업 제외될 수 있습니다

🏡 베란다 (배수 가능 공간)

천장, 벽, 바닥, 창틀, 내창, 샷시 등 전체 작업

붙박이장/펜트리 포함 (추가 설치장은 별도 협의)

탈거 가능한 수납공간은 내부까지 청소
  예: 등커버, 서랍장, 주방 걸레받이 등 수작업 탈거 가능한 부분

🏡 전등 탈거 후 청소

전체 등기구 탈거 후 청소 (※ 파손 우려 시 불가 / 샹들리에는 제외)`
  },
  {
    key: 'F3',
    text: `🎀 청소해유 예약시 제공되는 특별서비스🎀
(기본 청소 외 무료 제공!)

🌈청소해유의 서비스🌈
🎈15만원편백수원액기계분사(집안전체살균소독)
🎈7만원 창틀실리콘곰팡이방지제도포
🎈각종배수구및변기,싱크볼180도고온스팀살균
🎈화장실거울&수전.싱크대수전유리막코팅(오염방지.물때방지)
🎈5만원 유충및해충박멸서비스
🎈숨고업계최대30일간사후처리서비스
🎈피톤치드살균(새집&헌집증후군도움)
🎈각배수구및 세면대 싱크볼UV살균
🎈비포에프터사진공유&하자체크
🎈각종 펜트리&붙박이장 무료탈거청소(살균소독)`
  },
  {
    key: 'F4',
    text: `🌺기존 15만원상당의서비스🌺
 💗편백수액원액 기계분사💗
당일예약시 살균소독및 새집&헌집증후군에 탁월한 편백수원액을 집안전체에 도포해드립니다
🔅타업체 처럼물타서쓰는 피톤치드와 차원이다르십니다!!✔️
(집안전체살균소독<현관문부터집안전체>)
🌈24시간안 예약시 서비스드립니다🌈`  
  },
  {
    key: 'F6',
    text: `하청주는업체에서는
저희같은금액에청소받으실수없으세요^^
직영점에서만가능합니다

운영되고있어 이금액에 가능하세요!!
하청업체는 수수료 제외한 금액으로 서비스를 해야하니 과도한 추가금이 나올수 있습니다 😅`  
  },
  {
    key: 'F7',
    text: `🌈5성급 호텔에서 10년이상 청소직으로 근무하다 이사때 입주청소받아보고..이건 아니다싶어서 호텔에서 근무하던 동기3명과 💕청소해유💕란 이름으로 청소업체 차렸습니다!
경력만 17년넘는 베테랑중의 베테랑!
호텔의결벽증을 정석을 확실히보여드려요
(위생과 청결 최고의퀄리티! 최저가격)
전문교육받으신 3년넘는베태랑팀장님들투입합니다 
❤️대표님도 현장투입❤️
❗️직영팀만투입❗️약속합니다

대표홈페이지
https://cheongsohaeu.co.kr/
대표블로그
https://blog.naver.com/PostList.nhn?blogId=wjdtngusdlek45&from=postList&categoryNo=6`  
  },
  {
    key: 'F8',
    text: `저희 💥청소해유💥는 처음부터오픈견적내어드립니다~청소날 갑작스런추가로기분나쁘실수있기에 너무적은견적에 현혹되지마세요ㅜ 현장에서 어떤이유로든 추가금발생시키십니당 
추가부합사항없다면 추가금일절없고 추가금거절도가능하십니다`  
  },
  {
    key: 'F9',
    text: `100% 외주/하청없는 직영팀만 만들어낼수있는 합리적인 금액으로 고객님들을 기만하지않으며
👶우리 아이가 살집, 👩‍❤‍👨 내 가족이 살집, 내 새출발을 시작할곳이라 생각하며 놓치는곳없이 꼼꼼히 작업에 임하겠습니다.`  
  },
  {
    key: 'F10',
    text: `👨‍👩‍👦‍👦독일친환경 세제 ❗️키엘제품❗️사용👨‍👩‍👦‍👦
코베트ㅡ 타일.유리세정.바닥청소
비녹신ㅡ금속표면세정및표면보호
사니칼ㅡ화장실.욕실세정
그라셋ㅡ각종기름때(동물성.
엑손포르테ㅡ주방후드.기구.바닥.벽오염제거

💥꼭확인하세요!타업체사용제품이 신생아와 반려동물에안전한제품인지!!💥
바로입주가능한 친환경세제만 사용합니다❤️`  
  },
  {
    key: 'F11',
    text: `🍀상위1프로5.0만점 청소해유🍀
🌈2천개넘는리뷰중 클레임성리뷰 단한개도없는 업체

🌈8천건넘는 작업을통한 팀장님의 노하우와 기술로 퀄리티있는청소하는 업체
🌈17년이상된 대표님과 최소5년이상되신팀장님들로 꾸려져있는 업체

🌈대표님역시 직접투입업체`  
  },
  {
    key: 'F12',
    text: `리뷰비교해보실때
‼️ 별점낮은순‼️으로꼭꼭비교해주세요🥰
저희는클레임성리뷰단한개도없는 2천개넘는리뷰가증명합니다~1점많은업체는 걸러주세요💥 사후서비스안되거나  하청쓰는업체입니다`  
  }
];

export default function App() {
  const [selected, setSelected] = useState(mappings[0]);

  return (
    <div className="h-screen flex">
      {/* 왼쪽 카드 리스트 */}
      <div className="w-1/3 bg-gray-50 p-4 overflow-auto">
        {mappings.map((m) => (
          <div
            key={m.key}
            onClick={() => setSelected(m)}
            className={`cursor-pointer p-3 mb-2 rounded-md shadow-sm hover:bg-gray-100 ${
              selected.key === m.key ? 'bg-white shadow-md' : ''
            }`}
          >
            <h3 className="font-bold">{m.key} 키 멘트</h3>
            <p className="text-sm text-gray-600 truncate">{m.text.split('\n')[0]}</p>
          </div>
        ))}
      </div>

      {/* 오른쪽 상세 박스 */}
      <div className="flex-1 p-6 bg-white overflow-auto">
        <div className="border rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4">{selected.key} 키 멘트</h2>
          <pre className="whitespace-pre-wrap text-base text-gray-800">{selected.text}</pre>
          <button
            onClick={() => {
              navigator.clipboard.writeText(selected.text);
              alert(`${selected.key} 멘트가 복사되었습니다!`);
            }}
            className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            복사하기
          </button>
        </div>
      </div>
    </div>
  );
}
