import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


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