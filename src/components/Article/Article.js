import {Desc, Image, StyledLink, Title} from '../Common/Common';
import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';

const Container =  ({ className, children }) => (
  <div
    className={classnames('col-md-6 col-lg-4', className)}
    style={{marginBottom: '2rem'}}
    >
    {children}
  </div>
);

class Article extends Component {
  render() {
    const data = this.props.general.articleList;
    // src={`/img/${data[this.props.seq].thumbnail}`} 
    return (
      <Container>
        <StyledLink to={data[this.props.seq].link}>
          <Image className='rounded' /> 
        </StyledLink>
        <div className='row'>
          <div className='col-md-12'>
            <StyledLink to={data[this.props.seq].link}>
              <Title>{data[this.props.seq].title}</Title>
            </StyledLink>
            <Desc>
              {data[this.props.seq].description}
            </Desc>
          </div>
        </div>
      </Container>
    );
  }
}

Article.propTypes = {
  general: PropTypes.shape({
    articleList: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};

const mapStateToProps = state => ({
  ...state,
 });

export default connect(mapStateToProps)(Article);