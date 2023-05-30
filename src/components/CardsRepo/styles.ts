import { styled } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';

export const Containers = styled(Container)`
    width: auto !important;
    height: auto;
    
    gap: 10 px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    border: 1px solid red;
`;

export const ContainCard = styled('div')`
    width: 221px;
    height: 300px;

    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 1px 3px #00000026;
    border-radius: 6px;
    padding: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContentImage = styled('div')`
    width: 209px;
    height: 149px;

    border: 1px solid #00000012;
    border-radius: 4px;

    position: relative;
`;

export const Image = styled('img')`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Linguage = styled('div')`
    width: 100%;
    height: 25px;
  
    background: blue;
    border-radius: 12px;

    display:flex;
    align-items:center;
    justify-content:center;

    position: absolute;
    bottom: -5px;
`;

export const Text = styled(Typography)`
    font-size: 9px;
    font-weight: bold !important;
    letter-spacing: 0px;
    color: #FFFFFF;

`;

export const ContentText = styled(Container)`
    width: 100%;
    height: auto;

    padding: 0 !important;
    margin: 15px 0 0 0;

`;

export const Title = styled(Typography)`
    font-size: 15px !important;
    font-weight: 600 !important;
    font-family: 'Montserrat', sans-serif !important;

    text-overflow: ellipsis;
    word-break: break-word;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`;


export const TextDesc = styled(Typography)`
    width: 100%;
    height: auto;

    color: black;
    font-size: 13px;
    font-family: 'Montserrat', sans-serif !important;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 5px 0px;

    @media(min-width: 1024px) {
        font-size: 20px;
    }

        a {
            text-overflow: ellipsis;
            word-break: break-word;
            overflow: hidden;
            display: -webkit-box;

            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            
        }

`;