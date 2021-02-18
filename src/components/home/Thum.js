import { displayConfig } from "libs/util";
import React from "react";
import styled from "styled-components";
import ThumStar from "./ThumStar";

function Thum({ item }) {
  const { title, location, imgs, stars, type, config } = item;
  return (
    <>
      <Card>
        <Img src={imgs[0]} />
        <Col>
          <SubText>
            {location}의 {type}
          </SubText>
          <Text>{title}</Text>
          <SubText>{displayConfig(config)}</SubText>
          <ThumStar stars={stars} />
        </Col>
      </Card>

      <MoblieCard>
        <Img src={imgs[0]} />
        <ThumStar stars={stars} />
        <Text>
          {type} {location}
        </Text>
        <Text>{title}</Text>
      </MoblieCard>
    </>
  );
}

const MoblieCard = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  margin: 1rem;
  & > * {
    margin-top: 4px;
  }
  & > img {
    width: 100%;
  }
  @media screen and (min-width: 745px) {
    display: none;
  }
`;

const Card = styled.div`
  display: flex;
  cursor: pointer;
  width: 100%;
  margin: 0 5% 0 5%;
  padding: 1rem 0 1rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  & > img {
    width: 300px;
    height: 200px;
  }
  @media screen and (max-width: 745px) {
    display: none;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  & > * {
    margin-bottom: 4px;
  }
`;

const Img = styled.img`
  all: unset;
  border-radius: 10px;
`;

const Text = styled.p`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const SubText = styled(Text)`
  color: gray;
  font-size: small;
`;

export default Thum;
