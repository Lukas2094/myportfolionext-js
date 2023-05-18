import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Box, Tabs } from '@mui/material';


export const HeaderContainer = styled(AppBar)`
  background-color: #000;
  padding: 10px;
  position: fixed;
  top: 0;
  z-index: 50;
`;
export const HeaderToolBar = styled(Toolbar)`
  margin: 0 20px;

  @media(min-width: 1024px) {
    margin: 0 30px;
  }
`;

export const HeaderTitle = styled(Typography)`
  flex-grow: 1;
`;
export const StackRow = styled(Stack)`
   @media(min-width: 1024px) {
    margin: 0 70px;
   }
`;

export const MyAvatar = styled(Avatar)`
    
    border: 2px solid White;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
`;

export const BoxContain = styled(Box)`
    width: 100%;
    display:flex;
    align-items:center;
    justify-content: space-between;
    margin-left: 20px;

    @media(min-width: 1024px){
      width: 35%;
    }
`;

export const TabHeader = styled(Tabs)`

    a {
      color: white;
    }
`;