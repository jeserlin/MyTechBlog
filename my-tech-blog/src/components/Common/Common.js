import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  height: 300px;
  background-color: rgba(204,144,135,0.8);
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  text-align: left;

  /* RWD */
  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

export const Desc = styled.div`
  font-size: 1.25rem;
  text-align: left;
  color: rgba(0,0,0,.54)!important;

  /* RWD */
    @media (max-width: 576px) {
    font-size: 1rem;
  }
`;