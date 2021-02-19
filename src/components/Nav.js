import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

function Nav() {
  const history = useHistory();
  const onUrl = (url) => {
    history.push(url);
  }
  return (
    <>
      <Wrapper>
        <Logo onClick={() => onUrl('/')}>
          <img src="icons8-airbnb-50.png" width={35} alt="logo" />
          <Title>kitbnb</Title>
        </Logo>
        <Search>
          <input placeholder="검색하기" />
          <img src="icons8-search-50.png" width={35} alt="search" />
        </Search>
        <Button> 호스트 되기 </Button>
        <Button>
          <img
            src="https://img.icons8.com/material-outlined/24/000000/globe--v2.png"
            alt="globe"
          />
        </Button>
        <Button>
          <img
            src="https://img.icons8.com/material/24/000000/user-male-circle--v1.png"
            alt="user"
          />
        </Button>
      </Wrapper>
      <Mobile>
        <Button>
          <img
            src="https://img.icons8.com/ios-glyphs/20/000000/back.png"
            alt="back"
          />
        </Button>
        <Button> 금오 </Button>
        <Button>
          <img
            src="https://img.icons8.com/ios/20/000000/menu--v1.png"
            alt="more"
          />
        </Button>
      </Mobile>
      <Margin/>
    </>
  );
}

const Wrapper = styled.div`
  position: fixed;
  z-index: 1000;
  background: white;
  display: flex;
  width: 90%;
  padding: 1rem 5% 1rem 5%;
  box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 745px) {
    display: none;
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Title = styled.p`
  color: #f1c40f;
  margin-left: 4px;
  font-size: 24px;
  font-weight: 800;
`;
const Search = styled.form`
  display: flex;
  align-content: center;
  padding: 6px 7px 7px 1rem;
  margin: 0 auto 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  & input {
    all: unset;
  }
  & img {
    cursor: pointer;
  }
  &:hover {
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  }
`;
const Button = styled.button`
  all: unset;
  padding: 0 1rem 0 1rem;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background: rgba(150, 150, 150, 0.1);
  }
`;

const Mobile = styled.div`
  position: fixed;
  z-index: 1000;
  background: white;
  display: flex;
  align-content: center;
  width: 100%;
  height: 48px;
  padding: 8px;
  border-bottom: 1px solid #ececee;
  @media screen and (min-width: 745px) {
    display: none;
  }
  & > button {
    font-size: 15px;
  }
  & :first-child{
    padding-right: 0;
  }
  & :last-child {
    margin-left: auto;
    padding-right: 1rem;
  }
`;
const Margin = styled.div`
  @media screen and (min-width: 745px) {
    padding-top: 7rem;
  }
  @media screen and (max-width: 745px) {
    padding-top: 5rem;
  }
`
export default Nav;
