import React from "react";
import styled from "styled-components";

function ThumStar({ stars }) {
  const { point, hits } = stars;
  const num = (point / hits).toFixed(2);
  return (
    <div>
      <span role="img" aria-label="star">⭐</span> 
      <Num> {num} </Num> 
      <Hits> ({hits}) </Hits>
    </div>
  );
}

const Num = styled.span`

`
const Hits = styled.span`
    color: dimgray;
`

export default ThumStar;
