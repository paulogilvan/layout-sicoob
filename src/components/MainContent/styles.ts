import styled from 'styled-components';

export const MainContainer = styled.main`
  padding: 50px 20px;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;

  h2 {
    margin-bottom: 20px;
    color: #00ae9d;
    font-size: 2.5rem;
    font-weight: bold;
  }

  p {
    margin-bottom: 40px;
    color: #003641;
    font-size: 1.20rem;
    font-weight: bold;
  }
`;

export const Cards = styled.div``;

export const Card = styled.div`
  background-color: #f4f4f4;
  margin: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  text-align: left;

  &:hover {
    border: 1px solid #00ae9d;
  }

  img {
    max-width: 100%;
    border-radius: 10px 10px 0 0;
  }

  h3 {
    margin: 10px 0;
    text-align: center;
    color: #00ae9d;
    font-size: 1.5rem;    
  }

  p {
    margin: 10px 0;
    text-align: center;
    color: #003641;
    font-size: 1rem;
    font-weight: 300;
  }

  button {
    width: 93%;
    background-color: transparent;
    border: #00ae9d;
    color: #00ae9d;
    border: 1px solid #00ae9d;
    border-radius: 10px;
    margin: 10px;
    padding: 10px 20px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`;