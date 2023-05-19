import React from "react";
import * as S from './styles';
import { ExpandMore } from "@material-ui/icons";

export function Skills() {
    return (
        <S.Contain>
            <S.ContainerSkills>

                <S.ContentText>
                    <S.TextTypograph as={'p'}>
                        Minhas <b>Habilidades</b> 
                    </S.TextTypograph>   
                </S.ContentText>

                <S.ContainerCardSkills>

            <S.ContainCards>
                <S.Wrapper>
                    <S.WrapperSummary
                    expandIcon={<ExpandMore style={{color: '#FFF'}} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <S.TypeTyphographCard fontWeight={'bold !important'}>
                            <S.IconHTML /> 
                        </S.TypeTyphographCard>
                    </S.WrapperSummary>

                    <S.DetailsCard>
                        <S.TypeTyphographCard>
                         HTML 5 / HTML
                        </S.TypeTyphographCard>
                    </S.DetailsCard>
                </S.Wrapper>

                <S.Wrapper>
                    <S.WrapperSummary
                    expandIcon={<ExpandMore style={{color: '#FFF'}} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <S.TypeTyphographCard fontWeight={'bold !important'}>
                            <S.IconCSS /> <S.IconSass /> <S.IconBootStrap /> <S.IconTailwind />
                        </S.TypeTyphographCard>
                    </S.WrapperSummary>
                    <S.DetailsCard>
                        <S.TypeTyphographCard>
                            CSS 3 / Sass / Scss / Styled-components / Material Ui / BootStrap / Tailwind CSS
                        </S.TypeTyphographCard>
                    </S.DetailsCard>
                </S.Wrapper>

                <S.Wrapper>
                    <S.WrapperSummary
                    expandIcon={<ExpandMore style={{color: '#FFF'}} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <S.TypeTyphographCard fontWeight={'bold !important'}>
                            <S.WrapperSummary>
                               <S.IconJS /> <S.IconReact /> <S.IconVue /> <S.IconAngular /> <S.IconNext /> 
                            </S.WrapperSummary>
                        </S.TypeTyphographCard>
                    </S.WrapperSummary>
                    <S.DetailsCard>
                        <S.TypeTyphographCard>
                            JavaScript / TypeScript / ReactJS / VueJS / AngularJS / NextJS
                        </S.TypeTyphographCard>
                    </S.DetailsCard>
                </S.Wrapper>


                <S.Wrapper>
                    <S.WrapperSummary
                    expandIcon={<ExpandMore style={{color: '#FFF'}} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <S.TypeTyphographCard fontWeight={'bold !important'}>
                            <S.IconPhp /> <S.IconMySQL /> <S.IconMariaDB /> <S.IconPostSQL /> <S.IconGraphQl />
                        </S.TypeTyphographCard>
                    </S.WrapperSummary>
                    <S.DetailsCard>
                        <S.TypeTyphographCard>
                            PHP / MySQL / MariaDB / PostgreSQL / GraphQL
                        </S.TypeTyphographCard>
                    </S.DetailsCard>
                </S.Wrapper>

                <S.Wrapper>
                    <S.WrapperSummary
                    expandIcon={<ExpandMore style={{color: '#FFF'}} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <S.TypeTyphographCard fontWeight={'bold !important'}>
                            <S.IconWindow /> <S.IconLinux /> <S.IconMAC />  SISTEMAS
                        </S.TypeTyphographCard>
                     
                    </S.WrapperSummary>
                    <S.DetailsCard>
                        <S.TypeTyphographCard>
                            Windows / Linux / MAC OS
                        </S.TypeTyphographCard>
                    </S.DetailsCard>
                </S.Wrapper>

                </S.ContainCards>


                </S.ContainerCardSkills>

            </S.ContainerSkills>
        </S.Contain>
    )
}