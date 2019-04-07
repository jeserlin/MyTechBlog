import classnames from 'classnames';
import React, { Component } from 'react';
import styled from 'styled-components';

import Article from './components/Article';
import NavBar from './components/NavBar';

import './App.css';

const _Container = ({ className, children }) => (
  <div className={classnames('container', className)}>{children}</div>
);

const Container = styled(_Container)`
  margin-top: 30px;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Container>
          <div className="row">
            <Article />
            <Article />
            <Article />
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
