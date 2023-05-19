import { styled } from '@mui/material/styles';
import { Typography, Link } from '@material-ui/core';
import { Container } from '@mui/material';
import { GitHub } from "@material-ui/icons";
import { WhatsApp } from "@material-ui/icons";
import { LinkedIn } from "@material-ui/icons";

export const FooterContainer = styled('footer')`
  width:100%;
  height: auto;
  background-color: #333 !important;
  color: #fff;
  padding: 20px ;
  margin: 0;
`;

export const FooterText = styled(Typography)`
  font-size: 0.875rem;
  text-align: center;
  font-family: Montserrat;

  @media(min-width: 1024px) {
    font-size: 16px !important;
  }
`;

export const ContentLogo = styled(Container)`
    width: 240px;
    height: 100px; 
    border-radius: 50%;
    display: flex;
    align-items: center;

    @media(min-width: 1024px) {
        width: 200px;
        height: 120px; 
        margin: 0;
    }
 
`;

export const ImgsLogo = styled('img')`
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 50%;
`;

export const ContainInfos = styled(Container)`
    width: 100%;
    height:auto;

    padding: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

export const BlockContent = styled('div')`
    display: block;

`;

export const ContainLinks = styled(Container)`
    width: auto;
    height: auto;

    padding: 20px;

    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    flex-direction: column;
    margin: 0;

`;

export const FooterLink = styled(Link)`
  margin: 10px 0px 0 0 !important;
  color: #fff !important;
  font-size: 18px;
  text-align: left;
  text-decoration: none !important;

  margin-left: 8px;
  margin-right: 8px;

  /* &:hover {
    text-decoration: none;
    font-size: 19px;
  } */
`;

export const SocialMediaContainer = styled('div')`
    display: flex;
    justify-Content: center;
    margin-Top: 16px;
    width: 100%;
    flex-direction: column;
    align-items: center;

    @media(min-width: 1024px) {
        width: 20%;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
`;
  
export const SocialMediaLink = styled(Link)({
    color: '#fff',
    margin: '0 8px',
  });

export const GitHubIconStyled = styled(GitHub)({
    color: '#FFF', // Cor personalizada para o ícone do GitHub
    margin:'5px 0px 0 0',
    width: '3rem',
    height: '3rem',
  });
  
export const WhatsIconStyled = styled(WhatsApp)({
    color: '#00FF00', // Cor personalizada para o ícone do Whats
    margin:'5px 0px 0 0',
    width: '3rem',
    height: '3rem',
  });
  
export const LinkedInIconStyled = styled(LinkedIn)({
    color: '#0000FF', // Cor personalizada para o ícone do LinkedIn
    margin:'2px 0px 0 0',
    width: '3rem',
    height: '3rem',
  });