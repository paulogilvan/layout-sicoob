import styled from  'styled-components';

export const FooterContainer = styled.footer`
  background: #004d40;
  color: white;
  padding: 20px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media(max-width: 425px) {
    p {
        font-size: 14px;
        padding-left: 5px;
    }
  }
`;

export const FooterImg = styled.div`
    img {
        width: 15rem;

        @media(max-width: 425px) {
            width: 8rem;
            padding-right: 5px;
        }
    }
`;