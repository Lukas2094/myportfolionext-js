import { styled } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';
import {MdEmail} from 'react-icons/md';
import {BsFillTelephoneFill, BsWhatsapp , BsGithub} from 'react-icons/bs';
import {AiFillLinkedin} from 'react-icons/ai';


export const Containers = styled(Container)`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 60px 0 0 0;
    padding: 15px;

    @media(min-width: 1024px) {
       margin: 0 auto;
    }
`;

export const Content = styled('div')`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Text = styled(Typography)`
    width: 100%;
    height: auto;

    color: white;
    font-size: 14px;

    display: flex;
    align-items: center;

    margin: 5px 0px;

    @media(min-width: 1024px) {
        font-size: 20px;
    }

    b {
        color: #4bafab;
        font-size: 16px;
        font-weight: 600;
        margin: 0 5px;
        
        @media(min-width: 1024px) {
        font-size: 25px;
    }

        a {
            text-overflow: ellipsis;
            word-break: break-word;
            overflow: hidden;
            display: -webkit-box;

            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            
        }
    }

`;


export const Email = styled(MdEmail)`
   margin: 0 10px;
`;

export const Telefone = styled(BsFillTelephoneFill)`
   margin: 0 10px;
   color: red;
`;

export const Whats = styled(BsWhatsapp)`
   margin: 0 10px;
   color: #00FF00;
`;

export const LinkdIN = styled(AiFillLinkedin)`
   margin: 0 10px;
   color: #0000FF;
`;

export const GitHub = styled(BsGithub)`
   margin: 0 10px;
   color: black;
`;