import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #004452;
  color: white;
  padding: 30px 0;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTop = styled.div`    
    background-color: #00ae9d;
    margin-top: -30px;

    div {
        max-width: 1200px;
        margin: 0 auto;
    }

    ul {
        display: flex;
        list-style: none;
    }

    li {
        margin-right: 30px;
        padding: 10px;
    }

    a {
        color: #fff;
        text-decoration: none;
        font-size: 0.75rem;
    }
`;

export const Logo = styled.div`
  img {
    width: 150px;
    padding-top: 40px;
    cursor: pointer;
  }
`;

export const NavLinks = styled.nav<{ open: boolean }>`
  padding-top: 40px;
  position: absolute;
  right: 27rem;

  ul {
    display: flex;
    list-style: none;

    @media (max-width: 768px) {
      flex-direction: column;
      display: ${({ open }) => (open ? 'flex' : 'none')};
      background-color: #004452;
      position: absolute;
      top: 50px;
      left: 0;
      /* width: 100%;   */
      gap: 10px;
      padding: 30px;
      text-align: center;
    }
  }

  li {
    margin: 0 15px;
    font-size: 1rem;

    a {
      color: white;
      text-decoration: none;
    }
  }  
`;

export const Search = styled.div`
    img {
        width: 1.2rem;
        padding-top: 45px;
        cursor: pointer;
    }
`;

export const MenuHamburguer = styled.div<{ open: boolean }>`
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding-top: 30px;

  @media (max-width: 768px) {
    display: flex;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 4px 0;
    transition: 0.4s;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(-45deg) translate(-9.5px, 6px)' : 'none')};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(45deg) translate(-8px, -6px)' : 'none')};
    }
  }
`;
