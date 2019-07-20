import React, { Component } from 'react';

import { FaHeart } from "react-icons/fa";
import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  filter: saturate(.8);
  height: 250px;

  background-color: #e9d4b9;
  /* RWD */
  @media (max-width: 576px) {
    height: 60px;
  }
`;

const NavContent = styled.div`
  text-align: center;
  line-height: 50px;
  font-size: 30px;
  width: 560px;

  /* RWD */
  @media (max-width: 576px) {
    padding: 0;
  }
`;

const Text = styled.div`
  font-family: monospace;
  color: #ffffff;
`;

const Title = styled(Text)`
  font-size: 4rem;
  margin-top: 80px;

  /* RWD */
  @media (max-width: 576px) {
    font-size: 2rem;
    margin-top: 0;
    border: none;
  }
`;

const  SubTitle = styled(Text)`
  font-size: 2rem;

  /* RWD */
  @media (max-width: 576px) {
    display: none;
  }
`;

class NavBar extends Component {
  render() {
    return (
      <FlexContainer>
        <NavContent>
          <Title>Jeserlin's Blog</Title>
          <SubTitle>Front-end Developer</SubTitle>
          <FaHeart style={{color: 'white', width: '2rem'}}/>
        </NavContent>
      </FlexContainer>
    );
  }
}

export default NavBar;