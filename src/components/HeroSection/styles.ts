import styled from 'styled-components';

export const HeroContainer = styled.section`
  background-color: #00ae9d;
  color: white;
  text-align: center;
  padding: 100px 20px 0px 20px;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    
    /* width: 500px; */
    padding: 10px;

    .text1, .text2, .text3 {
      font-size: 5rem;
      font-weight: bold;
      color: #004452;
      line-height: 5rem;

      @media(max-width: 425px) {
        font-size: 3.5rem;
      }
    } 
    
    .text3 {
      color: white;
      font-size: 6rem;
      letter-spacing: .3rem;

      @media(max-width: 425px) {
        font-size: 3.5rem;
      }
    }
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
  color: #004452;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

export const Button = styled.button`
background-color: rgb(4,200,176);
background: linear-gradient(90deg, rgba(4,200,176,1) 45%, rgba(5,128,117,1) 100%);
border: none;
border-radius: 10px;
padding: 0 20px;
color: white;
font-size: 2rem;
margin-top: 20px;
cursor: pointer;

@media(max-width: 425px) {
  font-size: 1.5rem;
}
`;

export const Woman = styled.div`
  margin-left: 10rem;
  margin-top: -3rem;

  img {
      width: 350px;
  }
`;