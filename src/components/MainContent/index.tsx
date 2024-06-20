import { useState, useEffect } from 'react';
import * as C from './styles';
import Slide1 from '../../assets/img-slide1.jpg';
import Slide2 from '../../assets/img-slide2.jpg';
import Slide3 from '../../assets/img-slide3.jpg';
import Slide4 from '../../assets/img-slide4.jpg';
import Slide5 from '../../assets/img-slide5.jpg';
import Slide6 from '../../assets/img-slide6.jpg';
import Slide7 from '../../assets/img-slide7.jpg';
import Slide8 from '../../assets/img-slide8.jpg';
import Slide9 from '../../assets/img-slide9.jpg';
import Slide10 from '../../assets/img-slide10.jpg';
import Slide11 from '../../assets/img-slide11.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

export const MainContent = () => {    
    const [slidePerView, setSlidePerView] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setSlidePerView(1);
            } else {
                setSlidePerView(3);
            }
        }
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    return (
      <C.MainContainer>
        <C.Section>
            <h2>Soluções para o seu dia a dia</h2>
            <p>O Sicoob é um Sistema de Cooperativas Financeiras que conta com mais de 4,6 mil pontos de atendimento, canais digitais diversos e um portfólio completo de produtos e serviços para você, sua empresa e o agronegócio.</p>
            <C.Cards>
                <Swiper modules={[Navigation, Pagination]}
                        slidesPerView={slidePerView} pagination={{ clickable: true }}>
                    <SwiperSlide>
                    <C.Card>
                        <img src={Slide1} alt="Conta PF" />
                        <h3>Conta PF</h3>
                        <p>Receba e envie dinheiro, contrate produtos e serviços e conte com um super app no seu dia.</p>
                        <button>Saiba mais</button>
                    </C.Card>
                    </SwiperSlide>
                    <SwiperSlide>
                    <C.Card>
                        <img src={Slide2} alt="2ª Via de Boleto" />
                        <h3>2ª Via de Boleto</h3>
                        <p>Precisa emitir a 2ª via do seu boleto? É simples e muito prático.</p>
                        <button>Saiba mais</button>
                    </C.Card>
                    </SwiperSlide>
                    <SwiperSlide>
                    <C.Card>
                        <img src={Slide3} alt="Conta PJ" />
                        <h3>Conta PJ</h3>
                        <p>Uma conta com benefícios para você e sua empresa. É ser cooperado é um bom negócio.</p>
                        <button>Saiba mais</button>
                    </C.Card>
                    </SwiperSlide>
                    <SwiperSlide>
                    <C.Card>
                        <img src={Slide4} alt="Conta para Crianças e Adolescentes" />
                        <h3>Conta para Crianças</h3>
                        <p>Tem filhos? Abra uma conta para eles no App Sicoob.</p>
                        <button>Saiba mais</button>
                    </C.Card>
                    </SwiperSlide>
                    <SwiperSlide>
                    <C.Card>
                        <img src={Slide5} alt="Conta para Crianças e Adolescentes" />
                        <h3>Crédito Digital</h3>
                        <p>Receba o dinheiro na hora para usar como quiser..</p>
                        <button>Saiba mais</button>
                    </C.Card>
                    </SwiperSlide>
                    <SwiperSlide>
                    <C.Card>
                        <img src={Slide6} alt="Conta para Crianças e Adolescentes" />
                        <h3>Capital de Giro</h3>
                        <p>Dinheiro no caixa no momento que sua empresa mais precisa..</p>
                        <button>Saiba mais</button>
                    </C.Card>
                    </SwiperSlide>
                    <SwiperSlide>
                    <C.Card>
                        <img src={Slide7} alt="Conta para Crianças e Adolescentes" />
                        <h3>Cartão de Crédito</h3>
                        <p>Facilidades e benefícios exclusivos para realizar suas compras..</p>
                        <button>Saiba mais</button>
                    </C.Card>
                    </SwiperSlide>
                    <SwiperSlide>
                    <C.Card>
                        <img src={Slide8} alt="Conta para Crianças e Adolescentes" />
                        <h3>Maquininha</h3>
                        <p>Soluções de pagamento sob medida para todos os tipos de negócios..</p>
                        <button>Saiba mais</button>
                    </C.Card>
                    </SwiperSlide>
                    <SwiperSlide>
                    <C.Card>
                        <img src={Slide9} alt="Conta para Crianças e Adolescentes" />
                        <h3>Seguros</h3>
                        <p>Quando o que você ama está protegido, tudo fica bem..</p>
                        <button>Saiba mais</button>
                    </C.Card>
                    </SwiperSlide>
                    <SwiperSlide>
                    <C.Card>
                        <img src={Slide10} alt="Conta para Crianças e Adolescentes" />
                        <h3>Clínicas Financeiras</h3>
                        <p>Realize consultorias financeiras individuais, online e gratuitas com nossos orientadores..</p>
                        <button>Saiba mais</button>
                    </C.Card>
                    </SwiperSlide>
                    <SwiperSlide>
                    <C.Card>
                        <img src={Slide11} alt="Conta para Crianças e Adolescentes" />
                        <h3>Indique e Ganhe</h3>
                        <p>Quem é cooperado pode ganhar até R$ 300 em pontos Coopera chamando os amigos.</p>
                        <button>Saiba mais</button>
                    </C.Card>
                    </SwiperSlide>
                </Swiper>
            </C.Cards>
        </C.Section>
      </C.MainContainer>
    );
}