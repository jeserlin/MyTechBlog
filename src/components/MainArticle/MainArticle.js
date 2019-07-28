import {Desc, Image, StyledLink, Title} from '../Common/Common';
import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';

const Container =  ({ className, children }) => (
  <div
    className={classnames('row', className)}
    style={{marginBottom: '2rem'}}
    >
    {children}
  </div>
);

class MainArticle extends Component {
  render() {
    const data = this.props.general.articleList;
    const link = data[0] ? data[0].link : '';
    const title = data[0] ? data[0].title : '';
    const thumbnail = data[0] ? require(`../../static/img/${data[0].thumbnail}`) : '';
    const desc = data[0] ? data[0].description : '';
    return (
      <Container>
        <div className='col-md-12 col-lg-4'>
          <StyledLink to={link}>
            <Image className='img-thumbnail rounded' src={thumbnail} alt='img'/>
          </StyledLink>
        </div>
        <div className='col-md-12 col-lg-8'>
          <StyledLink to={link}>
            <Title>{title}</Title>
          </StyledLink>
          <Desc>{desc}</Desc>
        </div>
      </Container>
    );
  }
}

MainArticle.propTypes = {
  general: PropTypes.shape({
    articleList: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};

const mapStateToProps = state => ({
  ...state,
 });

export default connect(mapStateToProps)(MainArticle);