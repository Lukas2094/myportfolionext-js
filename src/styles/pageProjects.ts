import { styled } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';

export const Containers = styled(Container)`
    width: auto !important;
    height: auto;
    
    gap: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export const Content = styled('div')`
    width: 83%; !important;
    height: auto;
    
    gap: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    @media(max-width: 980px) {
        justify-content: center; 
    }
`;