const listDB = [
  {
    id: '0',
    location: "구미",
    title: "0. [Maria's]수유역5분!♥서울안심숙소♥지금 바로 가즈아",
    type: "콘도(아파트) 전체",
    config: {
      maxPeople: 5,
      room: 1,
      bed: 0,
      beth: 1,
    },
    discription: `☆프라이빗한 침실에서 일출을 감상하세요☆
        ※매회 소독중, 코로나 의심장소방문 및 증상이있으신 분은 정중히 예약 삼가 부탁드립니다.
        
        접근성 뛰어난 시내면서도 조용하고 한적한
        호텔형 개인별장입니다.
        신축으로 매우 깔끔하며 주차가능합니다.
        
        속초에서도 보기힘든 환상적인뷰로
        오션뷰는 물론이며
        일출,호수,설악산,씨티뷰 야경까지 감상하실수있습니다.
        
        22평 투룸구조이며
        남향+동향 전망 탁트인 로얄호실입니다.
        
        버스터미널, 해수욕장, 시내, 시장, 항구
        모두 도보 5~15분내 위치해있습니다.
        
        아이들도 편하게 묶을수있도록
        아늑한 한실룸도 있습니다`,
    stars: {
      point: 600,
      hits: 141,
    },
    imgs: [
      "https://placeimg.com/640/480/nature",
      "https://placeimg.com/640/480/animals",
      "https://placeimg.com/640/480/people",
    ],
  },
];
for (let i = 1; i < 20; i++) {
  const json = listDB[i - 1];
  const clone = JSON.parse(JSON.stringify(json))
  clone.id = String(i);
  const str = json.title;
  clone.title = i + str.substring(str.indexOf('.'));
  listDB.push(clone);
}
const findListItem = (id) => {
  const target = listDB.find(item => item.id === id)
  return target;
}
const searchListItems = (text) => {
  const items = listDB.filter(item => item.title.includes(text))
  return items;
}
export { listDB, findListItem, searchListItems};
