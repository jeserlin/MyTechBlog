import { connect } from 'react-redux';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

import { getArticleList } from './actions/index';
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

  componentDidMount() {
    this.props.getArticleList();
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Container>
          <div className="row">
          {
            this.props.general.articleList.map((a, i) => {
              return (
                <Article 
                  key={`article_${i}`}
                  seq={i}
                />
              );
            })
          }
          </div>
        </Container>
      </div>
    );
  }
}

App.propTypes = {
  general: PropTypes.shape({
    articleList: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};

const mapStateToProps = state => ({
  ...state,
 });

export default connect(mapStateToProps, {
  getArticleList,
})(App);
