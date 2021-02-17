import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
`

function TmpList() {
  const arr = ['a', 'b', 'c', 'd']
  const render = () => arr.map(item => <p> item </p>)

  return <Wrapper>
    {render()}
  </Wrapper>;
}

export default TmpList;
