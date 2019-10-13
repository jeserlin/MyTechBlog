import './App.css';

import React, { Component } from 'react';
import { Route, HashRouter as Router } from "react-router-dom";

import Article from './components/Article';
import Bootstrap4Cards from './containers/Bootstrap4Cards';
import Footer from './components/Footer';
import GA1 from './containers/GA1';
import GA2 from './containers/GA2';
import {Helmet} from "react-helmet";
import MainArticle from './components/MainArticle';
import NavBar from './components/NavBar';
import { PrefixTitle } from './components/Common/Common';
import PropTypes from 'prop-types';
import Pyenv from './containers/Pyenv';
import ReactBootstrap from './containers/ReactBootstrap';
import ReactGA from 'react-ga';
import StyledComponent from './containers/StyledComponent';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { getArticleList } from './actions/index';
import styled from 'styled-components';
import withTracker from './tools/withTracker';

// GA
ReactGA.initialize('UA-138738889-1');
ReactGA.pageview(window.location.pathname + window.location.search);

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
    this.styledComponent = this.styledComponent.bind(this);
    this.reactBootstrap = this.reactBootstrap.bind(this);
    this.ga1 = this.ga1.bind(this);
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
  
  // Articles
  bootstrap4Cards() {
    return <Bootstrap4Cards />;
  }

  styledComponent() {
    return <StyledComponent />
  }

  reactBootstrap() {
    return <ReactBootstrap />
  }

  ga1() {
    return <GA1 />
  }

  ga2() {
    return <GA2 />
  }

  pyenv() {
    return <Pyenv />
  }
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>{PrefixTitle}</title>
          <meta name="keywords" content="Jeserlin, Frontend, JavaScript, React, HTML, CSS" />
        </Helmet>
        <NavBar />
        <Router>
          <Route path="/" exact component={withTracker(this.index)} />
          <Route path="/bootstrap4CardColumns/" component={withTracker(this.bootstrap4Cards)} />
          <Route path="/styledComponent/" component={withTracker(this.styledComponent)} />
          <Route path="/reactBootstrap/" component={withTracker(this.reactBootstrap)} />
          <Route path="/ga1/" component={withTracker(this.ga1)} />
          <Route path="/ga2/" component={withTracker(this.ga2)} />
          <Route path="/pyenv/" component={withTracker(this.pyenv)} />
        </Router>
        <Footer/>
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
