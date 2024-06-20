// import { Logo } from '../Header/styles';
import Logo from '../../assets/logo.png'
import * as C from './styles';

export const Footer = () => {
    return (
        <C.FooterContainer>
            <p>© 2023 Sicoob. Todos os direitos reservados.</p>
            <C.FooterImg>
                <img src={Logo} alt="Sicoob Logo" />
            </C.FooterImg>            
        </C.FooterContainer>
    );
}