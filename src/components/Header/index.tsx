import { useState } from 'react';
import * as C from './styles';
import Logo from '../../assets/logo.png';
import Search from '../../assets/search.svg';

export const Header = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
      setOpen(!open);
    };

    return (
      <C.HeaderContainer>
        <C.HeaderTop>
            <div>
                <ul>
                    <li><a href="#">Para você</a></li>
                    <li><a href="#">Para sua empresa</a></li>
                    <li><a href="#">Para o agronegócio</a></li>
                </ul>
            </div>
        </C.HeaderTop>
        <C.Container>
            <C.Logo>
                <img src={Logo} alt="Sicoob Logo" />
            </C.Logo>
            <C.NavLinks open={open}>
            <ul>
                <li><a href="#">Sicoob</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Notícias</a></li>
                <li><a href="#">Abra sua Conta</a></li>
            </ul>                       
            </C.NavLinks>
            <C.Search><img src={Search} alt="search" /></C.Search> 
            <C.MenuHamburguer open={open} onClick={toggleMenu}>
            <div />
            <div />
            <div />
            </C.MenuHamburguer>
        </C.Container>
       </C.HeaderContainer>
    );    
}