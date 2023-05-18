import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Contain = styled("div")`
    width: 100%;
    height: auto;
    
    display: block;
    margin: 30px 0;
`;

export const ContentDivider = styled(Container)``;

export const LineDivider = styled("hr")`
    width: 100%;
    height: 1px;

    background: grey;
    border: none;
    
    opacity: 0.4;
`;