import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 2rem;
  background-image: url("https://images.unsplash.com/photo-1506045893316-5ce545f169a5?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=6000");
  background-size: 1980px;
  background-position: 60% center;
`;

const Title = styled.h1`
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 70px;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  text-align: center;
  margin-bottom: 0;
`;
const Login = styled.p`
  margin: auto;
`;

function Header() {
  return (
    <Wrapper>
      <Title>kitbnb</Title>
      <Login> login </Login>
    </Wrapper>
  );
}

export default Header;
