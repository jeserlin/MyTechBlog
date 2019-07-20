import React, { Component } from 'react';

import styled from 'styled-components';

const Container = styled.div`
  background-color: #e9d4b9;
`;

const Text = styled.div`
  font-size: 1.6rem;
  color: #ffffff;
`;

const Copyright = styled(Text)`
  margin-top: 1rem;
  padding: 1rem;
`;

class Footer extends Component {
  render() {
    const d = new Date();
    const year = d.getFullYear();
  
    return (
      <Container>
        <Copyright>© {year}. All rights reserved.</Copyright>
      </Container>
    );
  }
}

export default Footer;