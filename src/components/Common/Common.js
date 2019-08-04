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
  border: #e9d4b9 1rem double;
  -webkit-transition: 1s ease-in-out;
       -moz-transition: 1s ease-in-out;
        -ms-transition: 1s ease-in-out;
         -o-transition: 1s ease-in-out;
            transition: 1s ease-in-out;

  &:hover {
    border: #e9d4b9 .2rem solid;
  }
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
`;

// Article page
export const ArticleTitle = styled.div`
  font-size: 2.5rem;
  margin: 2rem 0;
  text-align: left;
`;

export const ArticleSubTitle = styled.div`
  font-size: 2rem;
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