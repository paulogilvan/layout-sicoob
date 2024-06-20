import styled from 'styled-components';

export const Section = styled.section`

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  display: flex;  

  @media (max-width: 425px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Container1 = styled.div`
    background-color: #003641;
    flex: 1;   
    display: flex;
    justify-content: end;
    width: 50vw;
    padding: 50px 30px;

    @media(max-width: 425px) {
      width: 100%;
    }
`;

export const Options1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    
    h2 {
        font-size: 2.3rem;
        color: #009688;
        margin-bottom: 15px;
        text-align: right;
        line-height: 120%;
    }

    p {
        color: white;
        margin-bottom: 20px;
        text-align: right;
    }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ffffff;
  border-radius: 5px;
  background: transparent;
  color: #ffffff;
  font-size: 16px;
  text-align: center;
  outline: none;

  &::placeholder {
    color: #ffffff;
  }
`;

export const Container2 = styled.div`
    background-color: #009688;
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 50vw;
    padding: 50px 30px;

    @media(max-width: 425px) {
      width: 100%;
    }

    h2 {
        font-size: 2.3rem;
        color: #003641;
        width: 500px;
        margin-bottom: 10px;
        line-height: 125%;

        @media(max-width: 768px) {
            width: 350px;
        }
    }
`;

export const Options2 = styled.div`
    display: flex; 
    width: 300px;    
    
    p {
        color: white;
        padding-top: 10px;
        margin-left: 15px;
        font-size: 1.1rem;
    }
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;