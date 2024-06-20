import * as C from './styles';
import Qrcode from '../../assets/qrcode.svg';

export const Range = () => {
    return (
        <C.RangeContainer>
            <C.Container>
                <C.Area>
                    <div className='qrcode'><img src={Qrcode} alt="qrcode" /></div>
                    <div className='phrase'><h2>Seja um Cooperado <span>Sicoob.</span></h2></div>
                </C.Area>
            </C.Container>
        </C.RangeContainer>
    );
}