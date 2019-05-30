import './App.css';

import React, { Component } from 'react';
import { Route, HashRouter as Router } from "react-router-dom";

import Article from './components/Article';
import Bootstrap4Cards from './containers/Bootstrap4Cards';
import MainArticle from './components/MainArticle';
import NavBar from './components/NavBar';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { getArticleList } from './actions/index';
import styled from 'styled-components';

const _Container = ({ className, children }) => (
  <div className={classnames('container', className)}>{children}</div>
);

const Container = styled(_Container)`
  margin-top: 30px;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.index = this.index.bind(this);
    this.bootstrap4Cards = this.bootstrap4Cards.bind(this);
  }

  componentDidMount() {
    this.props.getArticleList();
  }

  index() {
    return (
      <Container>
        <MainArticle />
        <div className="row">
        {
          this.props.general.articleList.map((a, i) => {
            if(i > 0) {
              return (
                <Article 
                  key={`article_${i}`}
                  seq={i}
                />
              );
            }
            return null;
          })
        }
        </div>
      </Container>
    );
  }
  
  bootstrap4Cards() {
    return <Bootstrap4Cards />;
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Router>
          <Route path="/" exact component={this.index} />
          <Route path="/bootstrap4CardColumns/" component={this.bootstrap4Cards} />
        </Router>
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
