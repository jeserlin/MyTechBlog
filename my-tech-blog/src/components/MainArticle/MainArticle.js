import { connect } from 'react-redux';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import {Image, Title, Desc} from '../Common/Common';

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
    const title = data[0] ? data[0].title : '';
    const desc = data[0] ? data[0].description : '';
    console.log(this.props);
    return (
      <Container>
        <div className='col-md-12 col-lg-8'>
          <Image className='rounded'/>
        </div>
        <div className='col-md-12 col-lg-4'>
          <Title>{title}</Title>
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