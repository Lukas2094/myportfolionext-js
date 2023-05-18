import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { styled } from '@mui/material/styles';
import {AiOutlineHtml5} from 'react-icons/ai';
import {IoLogoCss3} from 'react-icons/io';
import {TbBrandJavascript} from 'react-icons/tb';
import {FaReact} from 'react-icons/fa';
import {RiVuejsFill} from 'react-icons/ri';
import {SiPhp} from 'react-icons/si';

export const Contain = styled('div')`
    width: 100%;
    height: auto;


    display: block;
`;

export const ContainerSkills = styled(Container)``;


export const ContentText = styled('div')`
    width: 100%;
    height: auto;

    display: flex;

    align-items: center;
    justify-content: center;
`;


export const TextTypograph = styled(Typography)`
    font-size: 30px !important;
    font-family: MontSerrat  !important;
    margin: 15px 0px;
    color: #FFF;

    b {
        color: aqua;
    }
    
    @media(min-width: 1024px) {
        font-size: 45px !important;
    }
`;

export const ContainerCardSkills = styled("div")`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 20px;

    /* @media(min-width: 1024px){
        flex-direction: row;
    } */
`;


export const ContainCards = styled("div")`
    display: flex;
    gap: 20px;
    flex-direction: column;
    flex-wrap: nowrap;

    padding: 20px;

    max-width: 650px;
`;


export const Wrapper = styled(Accordion)`
     margin: 20px 0px;
     background: #FFF;
     border: 2px solid #FFF;
     border-radius: 7px !important;
`;

export const WrapperSummary = styled(AccordionSummary)``;

export const TypeTyphographCard = styled(Typography)`
    display: flex;
    align-items:center;

    color: black;
    font-size: 16px !important;
    padding: 0 15px;
`;

export const DetailsCard = styled(AccordionDetails)``;

export const IconHTML = styled(AiOutlineHtml5)`
    width: 20px;
    height: 20px;
    margin: 0 10px;
    color: #e34c26;

    @media(min-width: 1024px){
        width: 80px;
        height: 80px;
    }
`;

export const IconCSS = styled(IoLogoCss3)`
    width: 20px;
    height: 20px;
    margin: 0 10px;
    color: #0065f4;

    @media(min-width: 1024px){
        width: 80px;
        height: 80px;
    }
`;

export const IconJS = styled(TbBrandJavascript)`
    width: 20px;
    height: 20px;
    margin: 0 10px;
    color: #F0DB4F;

    @media(min-width: 1024px){
        width: 80px;
        height: 80px;
    }
`;
export const IconReact = styled(FaReact)`
    width: 20px;
    height: 20px;
    margin: 0 10px;
    color: #61DBFB;

    @media(min-width: 1024px){
        width: 80px;
        height: 80px;
    }
`;

export const IconVue = styled(RiVuejsFill)`
    width: 20px;
    height: 20px;
    margin: 0 10px;
    color:  #41b883;

    @media(min-width: 1024px){
        width: 80px;
        height: 80px;
    }
`;
export const IconPhp = styled(SiPhp)`
    width: 20px;
    height: 20px;
    margin: 0 10px;
    color:  #474a8a;

    @media(min-width: 1024px){
        width: 80px;
        height: 80px;
    }
`;