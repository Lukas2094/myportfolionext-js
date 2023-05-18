import React from 'react';
import * as S from './styles';
import { deepOrange } from '@mui/material/colors';
import {Menu} from '@material-ui/icons'
import { Box, Link, Tab } from '@mui/material';

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export function Header() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
 
    return (
        <>
            <S.HeaderContainer position="static">
                <S.HeaderToolBar>
                    <S.HeaderTitle variant="h6">
                    <S.StackRow direction="row" spacing={2} >
                        <S.MyAvatar sx={{ bgcolor: deepOrange[500] }}><img src='https://media.ativo.com/adm/magento/assetsBB/LSlogo.jpg'/></S.MyAvatar>
                    </S.StackRow>
                    </S.HeaderTitle>

                  <S.BoxContain>
                      <S.TabHeader value={value} onChange={handleChange} aria-label="nav tabs example">
                        <LinkTab label="Home" href="/" />
                        <LinkTab label="Contatos" href="/Contatos" />
                        <LinkTab label="Projetos" href="/Projetos" />
                      </S.TabHeader> 
                  </S.BoxContain>
                        
                </S.HeaderToolBar>   
            </S.HeaderContainer>
        </>
    )
}