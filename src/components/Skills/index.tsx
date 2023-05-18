import React from "react";
import * as S from './styles';
import { ExpandMore } from "@material-ui/icons";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {AiOutlineHtml5} from 'react-icons/ai';
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
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <S.TypeTyphographCard fontWeight={'bold !important'}>
                            <S.IconHTML /> HTML 5
                        </S.TypeTyphographCard>
                    </S.WrapperSummary>

                    <S.DetailsCard>
                        <S.TypeTyphographCard>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </S.TypeTyphographCard>
                    </S.DetailsCard>
                </S.Wrapper>

                <S.Wrapper>
                    <S.WrapperSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <S.TypeTyphographCard fontWeight={'bold !important'}>
                            <S.IconCSS /> CSS 3
                        </S.TypeTyphographCard>
                    </S.WrapperSummary>
                    <S.DetailsCard>
                        <S.TypeTyphographCard>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </S.TypeTyphographCard>
                    </S.DetailsCard>
                </S.Wrapper>

                <S.Wrapper>
                    <S.WrapperSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <S.TypeTyphographCard fontWeight={'bold !important'}>
                            <S.IconJS /> JavaScript
                        </S.TypeTyphographCard>
                    </S.WrapperSummary>
                    <S.DetailsCard>
                        <S.TypeTyphographCard>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </S.TypeTyphographCard>
                    </S.DetailsCard>
                </S.Wrapper>

                <S.Wrapper>
                    <S.WrapperSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <S.TypeTyphographCard fontWeight={'bold !important'}>
                            <S.IconReact /> ReactJS
                        </S.TypeTyphographCard>
                    </S.WrapperSummary>
                    <S.DetailsCard>
                        <S.TypeTyphographCard>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </S.TypeTyphographCard>
                    </S.DetailsCard>
                </S.Wrapper>

                <S.Wrapper>
                    <S.WrapperSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <S.TypeTyphographCard fontWeight={'bold !important'}>
                            <S.IconVue /> VueJS
                        </S.TypeTyphographCard>
                    </S.WrapperSummary>
                    <S.DetailsCard>
                        <S.TypeTyphographCard>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </S.TypeTyphographCard>
                    </S.DetailsCard>
                </S.Wrapper>

                <S.Wrapper>
                    <S.WrapperSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <S.TypeTyphographCard fontWeight={'bold !important'}>
                            <S.IconPhp /> PHP
                        </S.TypeTyphographCard>
                    </S.WrapperSummary>
                    <S.DetailsCard>
                        <S.TypeTyphographCard>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </S.TypeTyphographCard>
                    </S.DetailsCard>
                </S.Wrapper>

                </S.ContainCards>


                </S.ContainerCardSkills>

            </S.ContainerSkills>
        </S.Contain>
    )
}