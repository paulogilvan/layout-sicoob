import * as C from './styles';
import Woman from '../../assets/woman.png';

export const HeroSection = () => {
    return (
      <C.HeroContainer>
        <C.Container>
            <C.Info>
                <span className='text1'>Mais que</span>
                <span className='text2'>uma escolha</span>
                <span className='text3'>Financeira.</span>                
                <C.Button>um <b>mundo</b> de benefícios <b>para você</b></C.Button>                   
            </C.Info>  
            <C.Woman><img src={Woman} alt="woman" /></C.Woman>       
        </C.Container>
    </C.HeroContainer>
    );
}