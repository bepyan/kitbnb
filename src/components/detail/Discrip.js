import { displayConfig } from "libs/util";
import React from "react";
import styled from "styled-components";

function Discrip({item}) {
    const {type, config, discription} = item
  return (
    <Wrapper>
      <h1> OO님이 호스팅하는 {type} </h1>
      <p> {displayConfig(config)} </p>
      <textarea value={discription} readOnly rows={20}></textarea>
    </Wrapper>
  );
}
const Wrapper = styled.div`
    margin-top: 1rem;
    & > * {
        margin-top: 1rem;
    }
    & > h1 {
        font-size: 20px;
    }
    & > textarea {
        all: unset;
        white-space: pre-line;
        width: 100%;
        margin-top: 2rem;
        padding: 1rem;
        
    }
`;
export default Discrip;
