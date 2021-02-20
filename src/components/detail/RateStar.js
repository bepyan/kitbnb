import React, { createRef, useState } from "react";
import styled from "styled-components";
import ThumStar from "components/home/ThumStar";

function RateStar(props) {
  const [item, setItem] = props.useItem;
  const [stars, setStars] = props.useStars;
  const [star, setStar] = useState(0);
  const ref = createRef();

  const onHover = (point) => {
    const { childNodes } = ref.current;
    childNodes.forEach((item, i) => {
      item.setAttribute(
        "src",
        i < point ? "icons8-star-50-hover.png" : "icons8-star-50.png"
      );
    });
    setStar(point);
  };
  const onSubmit = () => {
    const update = { point: stars.point + star, hits: stars.hits + 1 };
    setStars(update);
    item.stars = update;
    setItem(item)
    alert("🥰 평점을 주셔서 감사합니다.");
  };

  return (
    <div>
      <ThumStar stars={stars} />
      <StarWrapper ref={ref}>
        {[1, 2, 3, 4, 5].map((point, idx) => (
          <Star key={idx} onMouseOver={() => onHover(point)} />
        ))}
      </StarWrapper>
      <ActionWrapper>
        <p>{star}</p>
        <button onClick={onSubmit}>별점주기</button>
      </ActionWrapper>
    </div>
  );
}
const StarWrapper = styled.div`
  display: flex;
`;
const Star = styled.img.attrs({
  src: "icons8-star-50.png",
})``;
const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  & p {
    margin-left: 10rem;
    width: 10px;
  }
  & button {
    margin-left: 1rem;
  }
`;
export default RateStar;
