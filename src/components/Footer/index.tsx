import React from "react";
import * as S from './styles'
import { GitHub } from "@material-ui/icons";
import { WhatsApp } from "@material-ui/icons";
import { LinkedIn } from "@material-ui/icons";

export function Footer() {
    return (

        <S.FooterContainer>

            <S.ContainInfos>
                <S.ContentLogo>
                    <S.ImgsLogo src={'https://media.ativo.com/adm/magento/assetsBB/LSlogo.jpg'}/>
                </S.ContentLogo>

            <S.SocialMediaContainer>

                <S.SocialMediaLink href="https://github.com/seu-usuario-do-github">
                    <S.GitHubIconStyled  />
                </S.SocialMediaLink>

                <S.SocialMediaLink href="https://twitter.com/seu-usuario-do-twitter">
                    <S.WhatsIconStyled />
                </S.SocialMediaLink>

                <S.SocialMediaLink href="https://www.linkedin.com/in/seu-usuario-do-linkedin">
                    <S.LinkedInIconStyled />
                </S.SocialMediaLink>

            </S.SocialMediaContainer>
              <S.BlockContent>
                 <S.ContainLinks>
                    <S.FooterLink href="/">Home</S.FooterLink>
                    <S.FooterLink href="/Portfolio">Portfolio</S.FooterLink>
                    <S.FooterLink href="/Contato">Contato</S.FooterLink>
                </S.ContainLinks>
              </S.BlockContent>
               
            </S.ContainInfos>
          

          <S.FooterText variant="body2" align="center">
            © {new Date().getFullYear()} Lukas Tech Systems.
            Todos os direitos reservados. 
            <br/> 
            Desenvolvido com Next.js, TypeScript, Material-UI e Styled-Components.
          </S.FooterText>
      </S.FooterContainer>

    )
}