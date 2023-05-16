import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Box, Link } from '@mui/material';


export const HeaderContainer = styled(AppBar)`
  background-color: #000;
  padding: 10px;
`;
export const HeaderToolBar = styled(Toolbar)`
  margin: 0 30px;
`;

export const HeaderTitle = styled(Typography)`
  flex-grow: 1;
`;
export const StackRow = styled(Stack)``;

export const MyAvatar = styled(Avatar)``;

export const BoxContain = styled(Box)`
    width: 85%;
    display:flex;
    align-items:center;
    justify-content: space-between;
    margin-left: 20px;

    @media(min-width: 1024px){
      width: 25%;
    }
`;

export const Links = styled(Link)`
    font-size: 16px;
    text-decoration: none;

    :hover {
      font-size: 18px;
    }
`;