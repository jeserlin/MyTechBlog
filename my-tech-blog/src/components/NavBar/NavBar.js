import React, { Component } from 'react';
import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  filter: saturate(.8);
  height:300px;

  /* css pattern form https://leaverou.github.io/css3patterns/ */
  background-color: hsl(34, 53%, 82%);
  background-image: repeating-linear-gradient(45deg, transparent 5px, hsla(197, 62%, 11%, 0.5) 5px, hsla(197, 62%, 11%, 0.5) 10px,
  hsla(5, 53%, 63%, 0) 10px, hsla(5, 53%, 63%, 0) 35px, hsla(5, 53%, 63%, 0.5) 35px, hsla(5, 53%, 63%, 0.5) 40px,
  hsla(197, 62%, 11%, 0.5) 40px, hsla(197, 62%, 11%, 0.5) 50px, hsla(197, 62%, 11%, 0) 50px, hsla(197, 62%, 11%, 0) 60px,
  hsla(5, 53%, 63%, 0.5) 60px, hsla(5, 53%, 63%, 0.5) 70px, hsla(35, 91%, 65%, 0.5) 70px, hsla(35, 91%, 65%, 0.5) 80px,
  hsla(35, 91%, 65%, 0) 80px, hsla(35, 91%, 65%, 0) 90px, hsla(5, 53%, 63%, 0.5) 90px, hsla(5, 53%, 63%, 0.5) 110px,
  hsla(5, 53%, 63%, 0) 110px, hsla(5, 53%, 63%, 0) 120px, hsla(197, 62%, 11%, 0.5) 120px, hsla(197, 62%, 11%, 0.5) 140px
  ),
  repeating-linear-gradient(135deg, transparent 5px, hsla(197, 62%, 11%, 0.5) 5px, hsla(197, 62%, 11%, 0.5) 10px,
  hsla(5, 53%, 63%, 0) 10px, hsla(5, 53%, 63%, 0) 35px, hsla(5, 53%, 63%, 0.5) 35px, hsla(5, 53%, 63%, 0.5) 40px,
  hsla(197, 62%, 11%, 0.5) 40px, hsla(197, 62%, 11%, 0.5) 50px, hsla(197, 62%, 11%, 0) 50px, hsla(197, 62%, 11%, 0) 60px,
  hsla(5, 53%, 63%, 0.5) 60px, hsla(5, 53%, 63%, 0.5) 70px, hsla(35, 91%, 65%, 0.5) 70px, hsla(35, 91%, 65%, 0.5) 80px,
  hsla(35, 91%, 65%, 0) 80px, hsla(35, 91%, 65%, 0) 90px, hsla(5, 53%, 63%, 0.5) 90px, hsla(5, 53%, 63%, 0.5) 110px,
  hsla(5, 53%, 63%, 0) 110px, hsla(5, 53%, 63%, 0) 140px, hsla(197, 62%, 11%, 0.5) 140px, hsla(197, 62%, 11%, 0.5) 160px);

  /* RWD */
  @media (max-width: 576px) {
    height: 80px;
  }
`;

const NavContent = styled.div`
  background-color: rgba(204,144,135,0.8);
  padding: 30px;
  text-align: center;
  line-height: 75px;
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
  font-size: 2rem;
  margin-top: 80px;
  border-left: 10px solid #ffffff;
  border-right: 10px solid #ffffff;

  /* RWD */
  @media (max-width: 576px) {
    font-size: 1.5rem;
    margin-top: 0;
    border: none;
  }
`;

const  SubTitle = styled(Text)`
  font-size: 1.5rem;

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
        </NavContent>
      </FlexContainer>
    );
  }
}

export default NavBar;