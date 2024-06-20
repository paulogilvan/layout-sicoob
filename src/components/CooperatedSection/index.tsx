import * as C from './styles';
import Qrcode from '../../assets/qrcode.svg';

export const CooperatedSection = () => {
    return (
      <C.Section>
        <C.Container>
            <C.Container1>
                <C.Options1>
                    <h2>Já é cooperado do Sicoob?</h2>
                    <p>Visite a página da sua cooperativa e fique por dentro do que está acontecendo.</p>                
                    <C.Input type="text" placeholder="Digite o nº da sua Cooperativa" />
                </C.Options1>
            </C.Container1>        
            <C.Container2>
                <h2>Ainda não é cooperado, mas quer aproveitar os benefícios?</h2>
                <C.Options2>                   
                    <C.Image src={Qrcode} alt="QR Code" />
                    <p>Baixe agora o App Sicoob, associe-se e abra sua conta.</p>          
                </C.Options2>
            </C.Container2>            
        </C.Container>
      </C.Section>
    );
}