import styled from 'styled-components';

export const RangeContainer = styled.div`
    background-color: #004452;
    padding: 25px;
    margin-top: -6px;
`;

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

export const Area = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    .qrcode img {
        width: 8rem;
        border-radius: 10px;
    }

    .phrase {
        font-size: 2rem;
        color: #00ae9d;
        margin-left: 20px;

        span {
            color: white;
        }
    }
`;