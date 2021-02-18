import React, { useState } from "react";
import styled from "styled-components";
import { listDB } from "libs/storage";
import Thum from "./Thum";

function PlaceList() {
  const [list, setList] = useState(listDB);

  return (
    <Wrapper>
      <Text>
        예약하기 전에 코로나19 관련 여행 제한 사항을 확인하세요.{" "}
        <a href="https://www.airbnb.co.kr/help/topic/1418/government-travel-restrictions-and-advisories">
          자세히 알아보기
        </a>
      </Text>
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
`;

const Text = styled.p`
  width: 100%;
  font-size: small;
  margin: 2rem 5% 0 5%;
  padding: 1rem 0 1rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export default PlaceList;
