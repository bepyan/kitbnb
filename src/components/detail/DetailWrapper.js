import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router";
import ThumStar from "components/home/ThumStar";
import Discrip from "./Discrip";
import RateStar from "./RateStar";
import { findListItem } from "libs/storage";

function DetailWrapper() {
  const {id} = useLocation().state;
  const [item, setItem] = useState(findListItem(id));
  const [stars, setStars] = useState(item.stars)
  const { title, location, imgs } = item;

  return (
    <Wrapper>
      <Title> {title} </Title>
      <Sub>
        <ThumStar stars={stars} />
        <button> {location} </button>
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
      <RateStar useItem={[item, setItem]} useStars={[stars, setStars]}/>
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
