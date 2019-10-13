import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PrefixTitle = 'Jeserlin\'s Blog';

// Remove Link style from react-router
export const StyledLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

// Home page article block
export const Image = styled.img`
  width: 100%;
  max-width: 300px;
`;

export const Title = styled.div`
  color: #000000;
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
  margin: 1rem 0;

  /* RWD */
  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

export const Desc = styled.div`
  font-size: 1.6rem;
  text-align: left;
  color: rgba(0,0,0,.54)!important;
  height: 4.8rem;
`;

export const UpdateTime = styled.div`
  font-size: 1.2rem;
  text-align: left;
  color: rgba(0,0,0,.54)!important;
`;

// Article page
export const ArticleTitle = styled.div`
  font-size: 3rem;
  margin: 2rem 0;
  text-align: left;
`;

export const ArticleSubTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  margin: 2rem 0;
  text-align: left;
  color: #6B5B95;
`;

export const ArticleContent = styled.div`
  color: #555555;
  font-size: 1.6rem;
  line-height: 3.5rem;
  text-align: left;

  .hightlight {
    color: #ba6b5e;
  }

  .emphasize {
    color: #aaaa55;
  }

  .code {
    border: 1px solid #eaeaea;
    padding: 1rem;
    border-radius: .4rem;
    background-color: #fcfcfc;
  }
`;

export const Iframe = styled.iframe`
  width: 100%;
`;