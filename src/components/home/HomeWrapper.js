import React, { useState } from "react";
import styled from "styled-components";
import { listDB } from "libs/storage";
import Thum from "./Thum";

function HomeWrapper() {
  const [list, setList] = useState(listDB);
  const url =
    "https://www.airbnb.co.kr/help/topic/1418/government-travel-restrictions-and-advisories";

  return (
    <Wrapper>
      <Introduce>
        <span> 300개 이상의 숙소 </span>
        <h1> 금오의 숙소</h1>
        <div>
          <p>예약하기 전에 코로나19 관련 여행 제한 사항을 확인하세요. </p>
          <a href={url}> 자세히 알아보기 </a>
        </div>
      </Introduce>
      {list.map((item, idx) => (
        <Thum item={item} key={idx} />
      ))}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 745px) {
    padding-top: 7rem;
  }
  @media screen and (max-width: 745px) {
    padding-top: 5rem;
  }
`;
const Introduce = styled.div`
  width: 100%;
  margin: 0 5% 1rem 5%;
  & h1 {
    margin-top: 4px;
  }
  & span {
    font-size: 14px;
    color: darkslategray;
  }
  & div{
    font-size: small;
    padding-top: 1rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
`
export default HomeWrapper;
