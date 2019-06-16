import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Remove Link style from react-router
export const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

// Home page article block
export const Image = styled.img`
  width: 100%;
  height: 300px;
  background-color: rgba(204,144,135,0.8);

  &:hover {
    background-color: rgba(204,144,135,1);
    transition: background-color .3s linear;
  }
`;

export const Title = styled.div`
  color: #000000;
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
  margin-bottom: 1rem;

  /* RWD */
  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

export const Desc = styled.div`
  font-size: 1.6rem;
  text-align: left;
  color: rgba(0,0,0,.54)!important;
`;

// Article page
export const ArticleTitle = styled.div`
  font-size: 2.5rem;
  margin: 2rem 0;
  text-align: left;
`;

export const ArticleSubTitle = styled.div`
  font-size: 2rem;
  margin: 2rem 0;
  text-align: left;
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
`;