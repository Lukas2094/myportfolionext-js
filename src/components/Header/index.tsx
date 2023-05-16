import React from 'react';
import * as S from './styles';
import { deepOrange } from '@mui/material/colors';
import {Menu} from '@material-ui/icons'
import { Box, Link } from '@mui/material';


export function Header() {

 
    return (
        <>
            <S.HeaderContainer position="static">
                <S.HeaderToolBar>
                    <S.HeaderTitle variant="h6">
                    <S.StackRow direction="row" spacing={2}>
                        <S.MyAvatar sx={{ bgcolor: deepOrange[500] }}>LS</S.MyAvatar>
                    </S.StackRow>
                    </S.HeaderTitle>

                  <S.BoxContain>
                    <S.Links

                        variant="body2"
                        href='/'
                        color={'#FFF'}
                      >
                        Home
                      </S.Links>

                      <S.Links
   
                        variant="body2"
                        href='/Projetos'
                        color={'#FFF'}
                      >
                        Projetos
                      </S.Links>

                      <S.Links
                        variant="body2"
                        href='/Contatos'
                        color={'#FFF'}
                      >
                        Contatos
                      </S.Links>              
                  </S.BoxContain>
                        
                </S.HeaderToolBar>   
            </S.HeaderContainer>
        </>
    )
}