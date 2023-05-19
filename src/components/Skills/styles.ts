import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { styled } from '@mui/material/styles';
import {AiOutlineHtml5} from 'react-icons/ai';
import {IoLogoCss3 , IoLogoAngular} from 'react-icons/io';
import {TbBrandJavascript} from 'react-icons/tb';
import {FaReact, FaSass} from 'react-icons/fa';
import {RiVuejsFill} from 'react-icons/ri';
import {SiPhp,SiNextdotjs , SiTailwindcss , SiMysql , SiMariadb , SiPostgresql , SiGraphql , SiWindows , SiMacos , SiChakraui} from 'react-icons/si';
import {BsBootstrapFill} from 'react-icons/bs';
import {FcLinux} from 'react-icons/fc';

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
     background: #000;
     border: 2px solid #000;
     border-radius: 7px !important;
     box-shadow: 0 0 5px #f8f8f8;
`;

export const WrapperSummary = styled(AccordionSummary)``;

export const TypeTyphographCard = styled(Typography)`
    display: flex;
    align-items:center;

    color: white;
    font-size: 16px !important;
    padding: 0 15px;
    font-family: MontSerrat !important;
    font-weight: 500 !important;
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

export const IconBootStrap = styled(BsBootstrapFill)`
    width: 20px;
    height: 20px;
    margin: 0 10px;
    color: #553c7b;

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
export const IconTailwind = styled(SiTailwindcss)`
    width: 20px;
    height: 20px;
    margin: 0 10px;
    color: #42a7b3;

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

export const IconNext = styled(SiNextdotjs)`
    width: 20px;
    height: 20px;
    margin: 0 10px;
    color:  #41b883;

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

export const IconSass = styled(FaSass)`
    width: 20px;
    height: 20px;
    margin: 0 10px;
    color:  #cc6699;

    @media(min-width: 1024px){
        width: 80px;
        height: 80px;
    }
`;
export const IconAngular = styled(IoLogoAngular)`
    width: 20px;
    height: 20px;
    margin: 0 10px;
    color:  #b52e31;

    @media(min-width: 1024px){
        width: 80px;
        height: 80px;
    }
`;

export const IconMySQL = styled(SiMysql)`
    width: 20px;
    height: 20px;
    margin: 0 10px;
    color:  #00758f;

    @media(min-width: 1024px){
        width: 80px;
        height: 80px;
    }
`;

export const IconPostSQL = styled(SiPostgresql)`
    width: 20px;
    height: 20px;
    margin: 0 10px;
    color:  #3a74a6;

    @media(min-width: 1024px){
        width: 80px;
        height: 80px;
    }
`;

export const IconMariaDB = styled(SiMariadb)`
    width: 20px;
    height: 20px;
    margin: 0 10px;
    color:  #c0765b;

    @media(min-width: 1024px){
        width: 80px;
        height: 80px;
    }
`;

export const IconGraphQl = styled(SiGraphql)`
    width: 20px;
    height: 20px;
    margin: 0 10px;
    color:  #e535ab;

    @media(min-width: 1024px){
        width: 80px;
        height: 80px;
    }
`;

export const IconWindow = styled(SiWindows)`
    width: 20px;
    height: 20px;
    margin: 0 10px;
    color:  #FFF;

    @media(min-width: 1024px){
        width: 80px;
        height: 80px;
    }
`;

export const IconLinux = styled(FcLinux)`
    width: 20px;
    height: 20px;
    margin: 0 10px;
    color:  #e535ab;

    @media(min-width: 1024px){
        width: 80px;
        height: 80px;
    }
`;

export const IconMAC = styled(SiMacos)`
    width: 20px;
    height: 20px;
    margin: 0 10px;
    color:  #89a1d4;

    @media(min-width: 1024px){
        width: 80px;
        height: 80px;
    }
`;

export const IconChakra = styled(SiChakraui)`
    width: 20px;
    height: 20px;
    margin: 0 10px;
    color:  #29b9ad;

    @media(min-width: 1024px){
        width: 80px;
        height: 80px;
    }
`;