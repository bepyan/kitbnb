import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router";
import ThumStar from "components/home/ThumStar";
import Discrip from "./Discrip";

function DetailWrapper(props) {
  const location = useLocation();
  const [item, setItem] = useState(location.state.item);
  const { title, location: loca, imgs, stars } = item;

  return (
    <Wrapper>
      <Title> {title} </Title>
      <Sub>
        <ThumStar stars={stars} />
        <a href={`https://www.airbnb.co.kr/s/${loca}/homes`}> {loca} </a>
        <div>
          <button> 공유하기 </button>
          <button> ♡ </button>
        </div>
      </Sub>
      <Imgs>
        {imgs.map((ig, idx) => {
          return <img src={ig} key={idx} alt="img" />;
        })}
      </Imgs>
      <Discrip item={item}></Discrip>
      <div>
          start
      </div>
      <Empty/>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin: 0 5% 0 5%;
`;
const Title = styled.p`
  font-size: 24px;
`;
const Sub = styled.div`
  display: flex;
  align-content: center;
  & > * {
    margin: auto 1rem auto 0;
  }
  & > :last-child {
    margin-left: auto;
  }
  & button {
    all: unset;
    padding: 1rem;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    &:hover {
      background: rgba(150, 150, 150, 0.1);
    }
  }
`;
const Imgs = styled.div`
  display: flex;
  margin-top: 1rem;
  border-radius: 10px;
  & > * {
    margin-right: 5px;
    height: 100%;
  }
  overflow-x: scroll;
`;
const Empty = styled.div`
    margin-bottom: 30%;
`;

export default DetailWrapper;
