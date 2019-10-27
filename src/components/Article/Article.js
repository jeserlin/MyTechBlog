import {Desc, Image, StyledLink, Title, UpdateTime} from '../Common/Common';
import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Container =  ({ className, children }) => (
  <div
    className={classnames('col-md-12, col-lg-6', className)}
    style={{marginBottom: '2rem'}}
    >
    {children}
  </div>
);

const _Card = ({ className, children }) => (
  <div
    className={classnames('card', className)}
    >
    {children}
  </div>
);

const Card = styled(_Card)`
  margin-bottom: 1rem !important;
  border: #e9d4be .1rem solid;
`;

class Article extends Component {
  render() {
    const data = this.props.general.articleList;
    const thumbnail = data[this.props.seq] ? require(`../../static/img/${data[this.props.seq].thumbnail}`) : '';
    return (
      <Container>
        <StyledLink to={data[this.props.seq].link}>
          <Card>
            <div className="row no-gutters">
              <div className="col-md-4">
                <Image className='rounded' src={thumbnail} alt='img'/> 
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <Title>{data[this.props.seq].title}</Title>
                  <Desc>
                    {data[this.props.seq].description}
                  </Desc>
                </div>
                <div className="card-footer">
                  <UpdateTime>更新時間： {data[this.props.seq].time}</UpdateTime>
                </div>
              </div>
            </div>
          </Card>
        </StyledLink>
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